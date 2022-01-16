import getCaller from './get-caller';
import getOrigin from './get-origin';
import getCallPath from './get-call-path';
import validateRequest from './validate-request';
const createClientPathMethod = (specs, path, method, callers, origin, validationLevel) => ({ pathParams = {}, queryParams = {}, body = null, contentType = 'application/json', } = { pathParams: {}, queryParams: {}, body: null, contentType: 'application/json' }) => {
    const routeSpecs = specs.paths[path][method];
    validateRequest(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
    const caller = getCaller(callers, routeSpecs, path, method);
    const callOrigin = getOrigin(origin, specs);
    const callPath = getCallPath(path, pathParams);
    const callUrl = new URL(callOrigin + callPath);
    for (const key in queryParams) {
        callUrl.searchParams.append(key, queryParams[key]);
    }
    return caller(callUrl, body);
};
export default (specs, callers, { origin = null, validationLevel = 'off', } = { origin: null, validationLevel: 'off' }) => {
    const client = {};
    for (const path in specs.paths) {
        client[path] = {};
        for (const method in specs.paths[path]) {
            client[path][method] = createClientPathMethod(specs, path, method, callers, origin, validationLevel);
        }
    }
    return client;
};
