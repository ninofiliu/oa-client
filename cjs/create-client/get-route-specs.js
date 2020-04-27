"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OAClientError = _interopRequireDefault(require("../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (specs, path, method) => {
  if (!(path in specs.paths)) {
    throw new _OAClientError.default(4, {
      path
    });
  }

  if (!(method in specs.paths[path])) {
    throw new _OAClientError.default(5, {
      path,
      method,
      specs
    });
  }

  return specs.paths[path][method];
};

exports.default = _default;