import getCaller from './get-caller';
import getOrigin from './get-origin';
import getCallPath from './get-call-path';
import validateRequest from './validate-request';
import OAClientError from '../errors/OAClientError';
export default (specs, callers, { origin = null, validationLevel = 'off', } = { origin: null, validationLevel: 'off' }) => new Proxy({}, {
    get(client, path) {
        if (!(path in specs.paths)) {
            throw new OAClientError(4, { path });
        }
        return new Proxy({}, {
            get(clientPath, method) {
                if (!(method in specs.paths[path])) {
                    throw new OAClientError(5, { path, method, specs });
                }
                return ({ pathParams = {}, queryParams = {}, body = null, contentType = 'application/json', } = { pathParams: {}, queryParams: {}, body: null, contentType: 'application/json' }) => {
                    const routeSpecs = specs.paths[path][method];
                    validateRequest(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
                    const caller = getCaller(callers, routeSpecs, path);
                    const callOrigin = getOrigin(origin, specs);
                    const callPath = getCallPath(path, pathParams);
                    const callUrl = new URL(callOrigin + callPath);
                    for (const key in queryParams) {
                        callUrl.searchParams.append(key, queryParams[key]);
                    }
                    return caller(callUrl, body);
                };
            },
        });
    },
});
