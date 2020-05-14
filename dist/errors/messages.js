"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var messages = {
  0: function _(_ref) {
    var test = _ref.test;
    return "Test is equal to ".concat(test);
  },
  1: function _(_ref2) {
    var path = _ref2.path;
    return "The path ".concat(path, " does not specify a route type. Make sure your OpenAPI specs have a .paths['").concat(path, "']['x-type'] key.");
  },
  2: function _(_ref3) {
    var type = _ref3.type,
        callers = _ref3.callers;
    return "No caller of type ".concat(type, ", only found ").concat(Object.keys(callers), ". Make sure your caller object has a ").concat(type, " key.");
  },
  3: function _() {
    return 'No origin nor server URL specified. Call createClient with an origin argument, or specify .servers[0].url in your OpenAPI specs.';
  },
  4: function _(_ref4) {
    var path = _ref4.path;
    return "Path ".concat(path, " not found. Make sure your OpenAPI specs have a .paths['").concat(path, "'] key.");
  },
  5: function _(_ref5) {
    var path = _ref5.path,
        method = _ref5.method,
        specs = _ref5.specs;
    return "The path ".concat(path, " does not handle the method ").concat(method, ". Change your method to one of ").concat(Object.keys(specs.paths[path]), ", or fix your specs so as to include a .specs.paths['").concat(path, "'].").concat(method, " definition.");
  },
  101: function _() {
    return 'No body passed, but the route requires one.';
  },
  102: function _(_ref6) {
    var contentType = _ref6.contentType,
        requestBody = _ref6.requestBody;
    return "Route does not handle content type ".concat(contentType, ", only one of ").concat(Object.keys(requestBody.content));
  },
  103: function _(_ref7) {
    var ajvError = _ref7.ajvError,
        data = _ref7.data;
    return ["Data does not pass validation: data".concat(ajvError.dataPath, " ").concat(ajvError.message), "schema path: ".concat(ajvError.schemaPath), "params: ".concat(JSON.stringify(ajvError.params)), "data: ".concat(JSON.stringify(data))].join('\n');
  },
  104: function _(_ref8) {
    var parameter = _ref8.parameter;
    return "".concat(parameter.name, " is required.");
  },
  105: function _(_ref9) {
    var schema = _ref9.schema;
    return "Expected a schema, got ".concat(schema, ". Please check your specs.");
  }
};
var _default = messages;
exports.default = _default;