import type { Callers, RouteSpecs } from "../types";
import getCaller from "./getCaller";

describe("getCaller", () => {
  it("returns callers[routeSpecs['x-type']] if it exists", () => {
    const callers: Callers = { foo: async () => {} };
    const routeSpecs: RouteSpecs = { "x-type": "foo", responses: {} };

    expect(getCaller(callers, routeSpecs, "get")).toEqual(callers.foo);
  });
  it("returns callers[method] if it exists", () => {
    const callers: Callers = { get: async () => {}, post: async () => {} };
    const routeSpecs: RouteSpecs = { responses: {} };

    expect(getCaller(callers, routeSpecs, "post")).toEqual(callers.post);
  });
  it("throws if no caller matches", () => {
    const callers: Callers = {};
    const routeSpecs: RouteSpecs = { "x-type": "foo", responses: {} };

    expect(() => getCaller(callers, routeSpecs, "get")).toThrow(
      "[oa-client:2]"
    );
  });
});
