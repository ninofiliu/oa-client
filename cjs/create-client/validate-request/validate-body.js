"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (validationLevel, routeSpecs, contentType, body) => {
  const {
    requestBody
  } = routeSpecs;

  if (!requestBody) {
    return;
  }

  if (!body && !requestBody.required) {
    return;
  }

  if (!body && requestBody.required) {
    throw new Error('No body passed, but the route requires one');
  }

  if (!requestBody.content[contentType]) {
    throw new Error(`Route does not handle requests of type ${contentType}`);
  }

  const {
    schema
  } = requestBody.content[contentType];
  (0, _validate.default)(validationLevel, schema, body);
};

exports.default = _default;