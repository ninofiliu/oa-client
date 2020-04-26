"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (validationLevel, parameter, value) => {
  if (!value && !parameter.required) return;
  if (!value && parameter.required) throw new Error(`${parameter.name} is required`);
  const schema = parameter.schema || parameter.content;
  (0, _validate.default)(validationLevel, schema, value);
};

exports.default = _default;