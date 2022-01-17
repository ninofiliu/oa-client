"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateParam = _interopRequireDefault(require("./validate-param"));

var _validateBody = _interopRequireDefault(require("./validate-body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = function _default(validationLevel, routeSpecs, pathParams, queryParams, body, contentType) {
  if (validationLevel === 'off') return;

  try {
    if (routeSpecs.parameters) {
      var _iterator = _createForOfIteratorHelper(routeSpecs.parameters),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var parameter = _step.value;
          var value = {
            path: pathParams,
            query: queryParams
          }[parameter.in][parameter.name];
          (0, _validateParam.default)(parameter, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    (0, _validateBody.default)(routeSpecs, contentType, body);
  } catch (e) {
    if (!e.message.startsWith('[oa-client:')) throw e; // eslint-disable-next-line no-console

    if (validationLevel === 'warn') console.warn(e);
    throw e;
  }
};

exports.default = _default;