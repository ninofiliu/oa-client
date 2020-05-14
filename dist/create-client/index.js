"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getCaller = _interopRequireDefault(require("./get-caller"));

var _getOrigin = _interopRequireDefault(require("./get-origin"));

var _getCallPath = _interopRequireDefault(require("./get-call-path"));

var _validateRequest = _interopRequireDefault(require("./validate-request"));

var _OAClientError = _interopRequireDefault(require("../errors/OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(specs, callers) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    origin: null,
    validationLevel: 'off'
  },
      _ref$origin = _ref.origin,
      origin = _ref$origin === void 0 ? null : _ref$origin,
      _ref$validationLevel = _ref.validationLevel,
      validationLevel = _ref$validationLevel === void 0 ? 'off' : _ref$validationLevel;

  return new Proxy({}, {
    get: function get(client, path) {
      if (!(path in specs.paths)) {
        throw new _OAClientError.default(4, {
          path: path
        });
      }

      return new Proxy({}, {
        get: function get(clientPath, method) {
          if (!(method in specs.paths[path])) {
            throw new _OAClientError.default(5, {
              path: path,
              method: method,
              specs: specs
            });
          }

          return function () {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              pathParams: {},
              queryParams: {},
              body: null,
              contentType: 'application/json'
            },
                _ref2$pathParams = _ref2.pathParams,
                pathParams = _ref2$pathParams === void 0 ? {} : _ref2$pathParams,
                _ref2$queryParams = _ref2.queryParams,
                queryParams = _ref2$queryParams === void 0 ? {} : _ref2$queryParams,
                _ref2$body = _ref2.body,
                body = _ref2$body === void 0 ? null : _ref2$body,
                _ref2$contentType = _ref2.contentType,
                contentType = _ref2$contentType === void 0 ? 'application/json' : _ref2$contentType;

            var routeSpecs = specs.paths[path][method];
            (0, _validateRequest.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
            var caller = (0, _getCaller.default)(callers, routeSpecs, path);
            var callOrigin = (0, _getOrigin.default)(origin, specs);
            var callPath = (0, _getCallPath.default)(path, pathParams);
            var callUrl = new URL(callOrigin + callPath);

            for (var key in queryParams) {
              callUrl.searchParams.append(key, queryParams[key]);
            }

            return caller(callUrl, body);
          };
        }
      });
    }
  });
};

exports.default = _default;