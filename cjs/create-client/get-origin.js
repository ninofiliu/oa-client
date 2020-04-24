"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (origin, specs) => {
  if (origin) return origin;

  if (!specs.servers || !specs.servers[0].url) {
    throw new Error('No origin nor server URL specified. Call createClient with an origin argument, or specify .servers[0].url in your OpenAPI specs.');
  }

  return specs.servers[0].url;
};

exports.default = _default;