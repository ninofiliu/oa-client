"use strict";

var _getCaller = _interopRequireDefault(require("./get-caller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getCaller', () => {
  it('throws if the route specs does not specify a type', () => {
    const callers = {};
    const routeSpecs = {};
    expect(() => (0, _getCaller.default)(callers, routeSpecs, '/a')).toThrow();
  });
  it('throws if the route specs specifies a type that is not a caller', () => {
    const callers = {};
    const routeSpecs = {
      type: 'foo'
    };
    expect(() => (0, _getCaller.default)(callers, routeSpecs, '/a')).toThrow();
  });
  it('returns callers[routeSpecs.type]', () => {
    const callers = {
      foo: 'bar'
    };
    const routeSpecs = {
      type: 'foo'
    };
    expect((0, _getCaller.default)(callers, routeSpecs, '/a')).toEqual('bar');
  });
});