"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate"));

var _OAClientError = _interopRequireDefault(require("../../errors/OAClientError"));

var _messages = _interopRequireDefault(require("../../errors/messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (validationLevel, parameter, value) => {
  if (!value && !parameter.required) return;

  if (!value && parameter.required) {
    switch (validationLevel) {
      case 'warn':
        // eslint-disable-next-line no-console
        console.warn(_messages.default[104]({
          parameter
        }));
        return;

      case 'error':
        throw new _OAClientError.default(104, {
          parameter
        });
    }
  }

  const schema = parameter.schema || parameter.content;
  (0, _validate.default)(validationLevel, schema, value);
};

exports.default = _default;