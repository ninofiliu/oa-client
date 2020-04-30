var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getRouteSpecs from './get-route-specs';
import getCaller from './get-caller';
import getOrigin from './get-origin';
import getCallPath from './get-call-path';
import validateRequest from './validate-request';
export default (specs, callers, method, origin, validationLevel) => ((path, { pathParams = {}, queryParams = {}, body, contentType = 'application/json', } = { pathParams: {}, queryParams: {}, contentType: 'application/json' }) => __awaiter(void 0, void 0, void 0, function* () {
    const routeSpecs = getRouteSpecs(specs, path, method);
    validateRequest(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
    const caller = getCaller(callers, routeSpecs, path);
    const callOrigin = getOrigin(origin, specs);
    const callPath = getCallPath(path, pathParams);
    const callUrl = new URL(callOrigin + callPath);
    for (const key in queryParams) {
        callUrl.searchParams.append(key, queryParams[key]);
    }
    return caller(callUrl, body);
}));
