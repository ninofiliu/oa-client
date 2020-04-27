"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OAClientError extends Error {
  constructor(code, data) {
    super(`[oa-client:${code}] ${_messages.default[code](data)}`);
    this.code = code;
  }

}

exports.default = OAClientError;