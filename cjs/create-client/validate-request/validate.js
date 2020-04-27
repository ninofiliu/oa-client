"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ajv = _interopRequireDefault(require("ajv"));

var _messages = _interopRequireDefault(require("../../errors/messages"));

var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv.default();

var _default = (validationLevel, schema, data) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;

  if (validationLevel === 'warn') {
    const message = _messages.default[103]({
      ajvError: ajv.errors[0],
      data
    }); // eslint-disable-next-line no-console


    console.warn(message);
  }

  if (validationLevel === 'error') throw new _OAClientError.default(103, {
    ajvError: ajv.errors[0],
    data
  });
};

exports.default = _default;