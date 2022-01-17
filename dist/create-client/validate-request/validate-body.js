"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate"));

var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(routeSpecs, contentType, body) {
  var requestBody = routeSpecs.requestBody;

  if (!requestBody) {
    return;
  }

  if (!body && !requestBody.required) {
    return;
  }

  if (!body && requestBody.required) {
    throw new _OAClientError.default(101);
  }

  if (!requestBody.content[contentType]) {
    throw new _OAClientError.default(102, {
      contentType: contentType,
      requestBody: requestBody
    });
  }

  var schema = requestBody.content[contentType].schema;
  (0, _validate.default)(schema, body);
};

exports.default = _default;