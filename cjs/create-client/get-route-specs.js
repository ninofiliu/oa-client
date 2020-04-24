"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (specs, path, method) => {
  if (!(path in specs.paths)) {
    throw new Error(`The path ${path} does not exist.`);
  }

  if (!(method in specs.paths[path])) {
    throw new Error(`The method ${method} is not handled for the path ${path}.`);
  }

  return specs.paths[path][method];
};

exports.default = _default;