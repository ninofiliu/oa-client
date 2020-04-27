"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  0: ({
    test
  }) => `Test is equal to ${test}`,
  1: ({
    path
  }) => `The path ${path} does not specify a route type. Make sure your OpenAPI specs have a .paths['${path}']['x-type'] key.`,
  2: ({
    type,
    callers
  }) => `No caller of type ${type}, only found ${Object.keys(callers)}. Make sure your caller object has a ${type} key.`,
  3: () => 'No origin nor server URL specified. Call createClient with an origin argument, or specify .servers[0].url in your OpenAPI specs.',
  4: ({
    path
  }) => `Path ${path} not found. Make your OpenAPI specs have a .paths['${path}'] key.`,
  5: ({
    path,
    method,
    specs
  }) => `The path ${path} does not handle the method ${method}. Change your method to one of ${Object.keys(specs.paths[path])}, or fix your specs so as to include a .specs.paths['${path}'].${method} definition.`,
  101: () => 'No body passed, but the route requires one.',
  102: ({
    contentType,
    requestBody
  }) => `Route does not handle content type ${contentType}, only one of ${Object.keys(requestBody.content)}`,
  103: ({
    ajvError,
    data
  }) => [`Data does not pass validation: data${ajvError.dataPath} ${ajvError.message}`, `schema path: ${ajvError.schemaPath}`, `params: ${JSON.stringify(ajvError.params)}`, `data: ${JSON.stringify(data)}`].join('\n'),
  104: ({
    parameter
  }) => `${parameter.name} is required.`
};
exports.default = _default;