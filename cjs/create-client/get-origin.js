"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OAClientError = _interopRequireDefault(require("../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (origin, specs) => {
  if (origin) return origin;

  if (!specs.servers || !specs.servers[0].url) {
    throw new _OAClientError.default(3);
  }

  return specs.servers[0].url;
};

exports.default = _default;