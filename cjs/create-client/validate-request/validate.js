"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ajv = _interopRequireDefault(require("ajv"));

var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv.default();

var _default = (schema, data) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;
  throw new _OAClientError.default(103, {
    ajvError: ajv.errors[0],
    data
  });
};

exports.default = _default;