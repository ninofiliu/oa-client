import { OperationObject } from "openapi3-ts";
import { Callers } from "../types";
import getCaller from "./get-caller";

describe("getCaller", () => {
  it("returns callers[routeSpecs['x-type']] if it exists", () => {
    const callers: Callers = { foo: async () => {} };
    const routeSpecs: OperationObject = { "x-type": "foo", responses: {} };

    expect(getCaller(callers, routeSpecs, "get")).toEqual(callers.foo);
  });
  it("returns callers[method] if it exists", () => {
    const callers: Callers = { get: async () => {}, post: async () => {} };
    const routeSpecs: OperationObject = { responses: {} };

    expect(getCaller(callers, routeSpecs, "post")).toEqual(callers.post);
  });
  it("throws if no caller matches", () => {
    const callers: Callers = {};
    const routeSpecs: OperationObject = { "x-type": "foo", responses: {} };

    expect(() => getCaller(callers, routeSpecs, "get")).toThrow(
      "[oa-client:2]"
    );
  });
});
