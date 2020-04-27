"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getRouteSpecs = _interopRequireDefault(require("./get-route-specs"));

var _getCaller = _interopRequireDefault(require("./get-caller"));

var _getOrigin = _interopRequireDefault(require("./get-origin"));

var _getCallPath = _interopRequireDefault(require("./get-call-path"));

var _validateRequest = _interopRequireDefault(require("./validate-request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (specs, callers, method, origin, validationLevel) => async (path, {
  pathParams = {},
  queryParams = {},
  body,
  contentType = 'application/json'
} = {
  pathParams: {},
  queryParams: {},
  contentType: 'application/json'
}) => {
  const routeSpecs = (0, _getRouteSpecs.default)(specs, path, method);
  (0, _validateRequest.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
  const caller = (0, _getCaller.default)(callers, routeSpecs, path);
  const callOrigin = (0, _getOrigin.default)(origin, specs);
  const callPath = (0, _getCallPath.default)(path, pathParams);
  const callUrl = new URL(callOrigin + callPath);

  for (const key in queryParams) {
    callUrl.searchParams.append(key, queryParams[key]);
  }

  return caller(callUrl, body);
};

exports.default = _default;