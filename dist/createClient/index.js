"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getCaller = _interopRequireDefault(require("./getCaller"));
var _getOrigin = _interopRequireDefault(require("./getOrigin"));
var _getCallPath = _interopRequireDefault(require("./getCallPath"));
var _validateRequest = _interopRequireDefault(require("./validateRequest"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var createClientPathMethod = function createClientPathMethod(specs, path, method, callers, origin, validationLevel) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pathParams: {},
        queryParams: {},
        body: null,
        contentType: "application/json"
      },
      _ref$pathParams = _ref.pathParams,
      pathParams = _ref$pathParams === void 0 ? {} : _ref$pathParams,
      _ref$queryParams = _ref.queryParams,
      queryParams = _ref$queryParams === void 0 ? {} : _ref$queryParams,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? null : _ref$body,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === void 0 ? "application/json" : _ref$contentType;
    var routeSpecs = specs.paths[path][method];
    (0, _validateRequest.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
    var caller = (0, _getCaller.default)(callers, routeSpecs, method);
    var callOrigin = (0, _getOrigin.default)(origin, specs);
    var callPath = (0, _getCallPath.default)(path, pathParams);
    var callUrl = new URL(callOrigin + callPath);
    for (var key in queryParams) {
      callUrl.searchParams.append(key, queryParams[key]);
    }
    return caller(callUrl, body);
  };
};
var _default = function _default(specs, callers) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      origin: null,
      validationLevel: "off"
    },
    _ref2$origin = _ref2.origin,
    origin = _ref2$origin === void 0 ? null : _ref2$origin,
    _ref2$validationLevel = _ref2.validationLevel,
    validationLevel = _ref2$validationLevel === void 0 ? "off" : _ref2$validationLevel;
  var client = {};
  for (var path in specs.paths) {
    client[path] = {};
    for (var method in specs.paths[path]) {
      client[path][method] = createClientPathMethod(specs, path, method, callers, origin, validationLevel);
    }
  }
  return client;
};
exports.default = _default;