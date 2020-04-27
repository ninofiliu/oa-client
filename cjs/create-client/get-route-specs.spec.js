"use strict";

var _getRouteSpecs = _interopRequireDefault(require("./get-route-specs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getRouteSpecs', () => {
  it('should fail for non existing paths', () => {
    const specs = {
      paths: {
        '/a': {
          get: {}
        }
      }
    };
    expect(() => (0, _getRouteSpecs.default)(specs, '/b', 'get')).toThrow('[oa-client:4]');
  });
  it('should get specs.paths[path][method]', () => {
    const specs = {
      paths: {
        '/a': {
          get: {
            hello: 'world'
          }
        }
      }
    };
    expect((0, _getRouteSpecs.default)(specs, '/a', 'get')).toEqual({
      hello: 'world'
    });
  });
});