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

  try {
    if (routeSpecs.parameters) {
      for (const parameter of routeSpecs.parameters) {
        const value = {
          path: pathParams,
          query: queryParams
        }[parameter.in][parameter.name];
        (0, _validateParam.default)(parameter, value);
      }
    }

    (0, _validateBody.default)(routeSpecs, contentType, body);
  } catch (e) {
    if (!e.message.startsWith('[oa-client:')) throw e; // eslint-disable-next-line no-console

    if (validationLevel === 'warn') console.warn(e);
    throw e;
  }
};

exports.default = _default;