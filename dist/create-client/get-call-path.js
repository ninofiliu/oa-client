"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(path, pathParams) {
  var ret = path;

  for (var key in pathParams) {
    if (!ret.includes("{".concat(key, "}"))) {
      throw new Error("The URL param ".concat(key, " was not found in the path ").concat(path));
    }

    ret = ret.replace("{".concat(key, "}"), pathParams[key]);
  }

  return ret;
};

exports.default = _default;