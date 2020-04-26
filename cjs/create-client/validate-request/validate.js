"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ajv = _interopRequireDefault(require("ajv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv.default();

var _default = (validationLevel, schema, data) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;
  const message = `Data does not pass validation: ${ajv.errors}`; // eslint-disable-next-line no-console

  if (validationLevel === 'warn') console.warn(message);
  if (validationLevel === 'error') throw new Error(message);
};

exports.default = _default;