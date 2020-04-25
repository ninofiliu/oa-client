import getRouteSpecs from './get-route-specs';
import getCaller from './get-caller';
import getOrigin from './get-origin';
import getCallPath from './get-call-path';

export default (specs, callers, method, origin = null) => (
  async (path, { pathParams, searchParams, body }) => {
    const routeSpecs = getRouteSpecs(specs, path, method);
    const caller = getCaller(callers, routeSpecs, path);
    const callOrigin = getOrigin(origin, specs);
    const callPath = getCallPath(path, pathParams);
    const callUrl = new URL(callOrigin + callPath);
    for (const key in searchParams) {
      callUrl.searchParams.append(key, searchParams[key]);
    }
    return caller(callUrl, body);
  }
);
