"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClientMethod = _interopRequireDefault(require("./create-client-method"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (specs, caller, origin = null) => ({
  get: (0, _createClientMethod.default)(specs, caller, 'get', origin),
  head: (0, _createClientMethod.default)(specs, caller, 'head', origin),
  post: (0, _createClientMethod.default)(specs, caller, 'post', origin),
  put: (0, _createClientMethod.default)(specs, caller, 'put', origin),
  delete: (0, _createClientMethod.default)(specs, caller, 'delete', origin),
  options: (0, _createClientMethod.default)(specs, caller, 'options', origin),
  trace: (0, _createClientMethod.default)(specs, caller, 'trace', origin),
  patch: (0, _createClientMethod.default)(specs, caller, 'patch', origin)
});

exports.default = _default;