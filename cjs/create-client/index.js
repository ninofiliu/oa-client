"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClientMethod = _interopRequireDefault(require("./create-client-method"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (specs, caller, {
  origin = null,
  validationLevel = 'off'
} = {
  origin: null,
  validationLevel: 'off'
}) => ({
  get: (0, _createClientMethod.default)(specs, caller, 'get', origin, validationLevel),
  head: (0, _createClientMethod.default)(specs, caller, 'head', origin, validationLevel),
  post: (0, _createClientMethod.default)(specs, caller, 'post', origin, validationLevel),
  put: (0, _createClientMethod.default)(specs, caller, 'put', origin, validationLevel),
  delete: (0, _createClientMethod.default)(specs, caller, 'delete', origin, validationLevel),
  options: (0, _createClientMethod.default)(specs, caller, 'options', origin, validationLevel),
  trace: (0, _createClientMethod.default)(specs, caller, 'trace', origin, validationLevel),
  patch: (0, _createClientMethod.default)(specs, caller, 'patch', origin, validationLevel)
});

exports.default = _default;