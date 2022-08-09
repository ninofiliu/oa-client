import createClient from ".";
import type { Callers, Specs } from "../types";

const specs: Specs = {
  openapi: "3.0.0",
  info: { title: "", version: "" },
  servers: [{ url: "http://my.server.com" }],
  paths: {
    "/users/{id}": {
      post: {
        "x-type": "simple-post",
      },
    },
  },
};
const callers: Callers = { "simple-post": async () => {} };
const mockedSimplePost = jest.spyOn(callers, "simple-post");
let client: ReturnType<typeof createClient>;

describe("createClient", () => {
  beforeEach(() => {
    client = createClient(specs, callers, {
      validationLevel: "error",
      origin: null,
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should call the right caller with a compiled URL and the body", () => {
    client["/users/{id}"].post({
      pathParams: { id: "123456" },
      queryParams: { foo: "bar" },
      body: { some: "data" },
      contentType: "application/json",
    });

    const url = "http://my.server.com/users/123456?foo=bar";
    expect(mockedSimplePost.mock.calls[0][0].toString()).toEqual(url);
    expect(mockedSimplePost.mock.calls[0][1]).toEqual({ some: "data" });
  });
});
