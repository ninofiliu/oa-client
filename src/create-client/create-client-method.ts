import getRouteSpecs from './get-route-specs';
import getCaller from './get-caller';
import getOrigin from './get-origin';
import getCallPath from './get-call-path';
import validateRequest from './validate-request';
import { Specs, Callers, ValidationLevel, Params } from '../types';

export default (
  specs: Specs,
  callers: Callers,
  method: string,
  origin: null | string,
  validationLevel: ValidationLevel,
) => (
  async (
    path: string,
    {
      pathParams = {},
      queryParams = {},
      body = null,
      contentType = 'application/json',
    }
    : { pathParams: Params, queryParams: Params, body: any, contentType: string }
    = { pathParams: {}, queryParams: {}, body: null, contentType: 'application/json' },
  ) => {
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
  }
);
