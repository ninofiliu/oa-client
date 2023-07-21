"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ajv = _interopRequireDefault(require("ajv"));
var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));
var _ajvFormats = _interopRequireDefault(require("ajv-formats"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ajv = new _ajv.default();
(0, _ajvFormats.default)(ajv);
var _default = function _default(schema, data) {
  if (!schema) throw new _OAClientError.default(105, {
    schema: schema
  });
  var valid = ajv.validate(schema, data);
  if (valid) return;
  throw new _OAClientError.default(103, {
    ajvError: ajv.errors[0],
    data: data
  });
};
exports.default = _default;