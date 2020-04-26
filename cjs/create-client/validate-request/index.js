"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateParam = _interopRequireDefault(require("./validate-param"));

var _validateBody = _interopRequireDefault(require("./validate-body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (validationLevel, routeSpecs, pathParams, queryParams, body, contentType) => {
  if (validationLevel === 'off') return;

  if (routeSpecs.parameters) {
    for (const parameter of routeSpecs.parameters) {
      const value = {
        path: pathParams,
        query: queryParams
      }[parameter.in][parameter.name];
      (0, _validateParam.default)(validationLevel, parameter, value);
    }
  }

  (0, _validateBody.default)(validationLevel, routeSpecs, contentType, body);
};

exports.default = _default;