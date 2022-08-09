import getCaller from "./getCaller";
import getOrigin from "./getOrigin";
import getCallPath from "./getCallPath";
import validateRequest from "./validateRequest";
import type { Specs, Callers, ValidationLevel, Params } from "../types";

const createClientPathMethod =
  (
    specs: Specs,
    path: string,
    method: string,
    callers: Callers,
    origin: string | null,
    validationLevel: ValidationLevel
  ) =>
  (
    {
      pathParams = {} as Params,
      queryParams = {} as Params,
      body = null as any,
      contentType = "application/json" as string,
    } = {
      pathParams: {} as Params,
      queryParams: {} as Params,
      body: null as any,
      contentType: "application/json" as string,
    }
  ) => {
    const routeSpecs = specs.paths[path][method];
    validateRequest(
      validationLevel,
      routeSpecs,
      pathParams,
      queryParams,
      body,
      contentType
    );
    const caller = getCaller(callers, routeSpecs, method);
    const callOrigin = getOrigin(origin, specs);
    const callPath = getCallPath(path, pathParams);
    const callUrl = new URL(callOrigin + callPath);
    for (const key in queryParams) {
      callUrl.searchParams.append(key, queryParams[key]);
    }
    return caller(callUrl, body);
  };

export default (
  specs: Specs,
  callers: Callers,
  {
    origin = null,
    validationLevel = "off",
  }: { origin: null | string; validationLevel: ValidationLevel } = {
    origin: null,
    validationLevel: "off",
  }
) => {
  const client = {} as {
    [path: string]: {
      [method: string]: ReturnType<typeof createClientPathMethod>;
    };
  };
  for (const path in specs.paths) {
    client[path] = {};
    for (const method in specs.paths[path]) {
      client[path][method] = createClientPathMethod(
        specs,
        path,
        method,
        callers,
        origin,
        validationLevel
      );
    }
  }
  return client;
};
