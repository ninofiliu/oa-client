"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (callers, routeSpecs, path) => {
  if (!routeSpecs.type) {
    throw new Error(`The path ${path} does not specify a route type. Make sure your OpenAPI specs have a .paths['${path}'].type key.`);
  }

  if (!(routeSpecs.type in callers)) {
    throw new Error(`The caller ${routeSpecs.type} doesn't exist. Make sure your caller object has a ${routeSpecs.type} key.`);
  }

  return callers[routeSpecs.type];
};

exports.default = _default;