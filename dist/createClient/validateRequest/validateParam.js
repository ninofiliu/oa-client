"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _validate = _interopRequireDefault(require("./validate"));
var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = function _default(parameter, value) {
  if (!value && !parameter.required) return;
  if (!value && parameter.required) throw new _OAClientError.default(104, {
    parameter: parameter
  });
  var schema = parameter.schema || parameter.content;
  (0, _validate.default)(schema, value);
};
exports.default = _default;