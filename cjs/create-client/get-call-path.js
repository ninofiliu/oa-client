"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (path, pathParams) => {
  let ret = path;

  for (const key in pathParams) {
    if (!ret.includes(`{${key}}`)) {
      throw new Error(`The URL param ${key} was not found in the path ${path}`);
    }

    ret = ret.replace(`{${key}}`, pathParams[key]);
  }

  return ret;
};

exports.default = _default;