import OAClientError from "./OAClientError";

describe("OAClientError", () => {
  it("creates instances of OAClientError", () => {
    const error = new OAClientError(0, { test: "xxx" });
    expect(error instanceof OAClientError).toBe(true);
    expect(new Error() instanceof OAClientError).toBe(false);
  });
  it("sets .code", () => {
    const error = new OAClientError(0, { test: "xxx" });
    expect(error.code).toEqual(0);
  });
  it("formats a message", () => {
    const error = new OAClientError(0, { test: "xxx" });
    expect(error.message).toEqual("[oa-client:0] Test is equal to xxx");
  });
});
