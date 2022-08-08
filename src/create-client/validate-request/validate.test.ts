import validate from "./validate";

describe("validate", () => {
  it("throws if data does not match schema, with an explanative message", () => {
    const schema = {
      type: "object",
      properties: {
        foo: { type: "number" },
        bar: { type: "string" },
      },
    };
    const data = {
      foo: "10",
      bar: 10,
    };

    expect(() => validate(schema, data)).toThrow(
      [
        "[oa-client:103] Data does not pass validation: data/foo must be number",
        "schema path: #/properties/foo/type",
        'params: {"type":"number"}',
        'data: {"foo":"10","bar":10}',
      ].join("\n")
    );
  });
  it("does not throw if data matches schema", () => {
    const schema = { type: "number" };
    const data = 10;

    expect(() => validate(schema, data)).not.toThrow();
  });
  it("supports the format property", () => {
    const schema = {
      type: "integer",
      format: "int32",
    };
    const data = 10;

    expect(() => validate(schema, data)).not.toThrow();
  });
});
