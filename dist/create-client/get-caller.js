"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OAClientError = _interopRequireDefault(require("../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(callers, routeSpecs, path) {
  if (!routeSpecs['x-type']) {
    throw new _OAClientError.default(1, {
      path: path
    });
  }

  var type = routeSpecs['x-type'];

  if (!(type in callers)) {
    throw new _OAClientError.default(2, {
      type: type,
      callers: callers
    });
  }

  return callers[type];
};

exports.default = _default;