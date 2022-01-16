import OAClientError from '../errors/OAClientError';
export default (callers, routeSpecs, path, method) => {
    var _a;
    // Fallback to a default call for the specified method
    const type = (_a = routeSpecs['x-type']) !== null && _a !== void 0 ? _a : method;
    if (!(type in callers)) {
        throw new OAClientError(2, { type, callers });
    }
    return callers[type];
};
