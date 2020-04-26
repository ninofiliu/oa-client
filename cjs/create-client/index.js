"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClientMethod = _interopRequireDefault(require("./create-client-method"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (specs, callers, {
  origin = null,
  validationLevel = 'off'
} = {
  origin: null,
  validationLevel: 'off'
}) => ({
  get: (0, _createClientMethod.default)(specs, callers, 'get', origin, validationLevel),
  head: (0, _createClientMethod.default)(specs, callers, 'head', origin, validationLevel),
  post: (0, _createClientMethod.default)(specs, callers, 'post', origin, validationLevel),
  put: (0, _createClientMethod.default)(specs, callers, 'put', origin, validationLevel),
  delete: (0, _createClientMethod.default)(specs, callers, 'delete', origin, validationLevel),
  options: (0, _createClientMethod.default)(specs, callers, 'options', origin, validationLevel),
  trace: (0, _createClientMethod.default)(specs, callers, 'trace', origin, validationLevel),
  patch: (0, _createClientMethod.default)(specs, callers, 'patch', origin, validationLevel)
});

exports.default = _default;