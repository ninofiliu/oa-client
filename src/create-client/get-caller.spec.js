import getCaller from './get-caller';

describe('getCaller', () => {
  it('throws if the route specs does not specify a type', () => {
    const callers = {};
    const routeSpecs = {};

    expect(() => getCaller(callers, routeSpecs, '/a')).toThrow();
  });
  it('throws if the route specs specifies a type that is not a caller', () => {
    const callers = {};
    const routeSpecs = { type: 'foo' };

    expect(() => getCaller(callers, routeSpecs, '/a')).toThrow();
  });
  it('returns callers[routeSpecs[\'x-type\']]', () => {
    const callers = { foo: 'bar' };
    const routeSpecs = { 'x-type': 'foo' };

    expect(getCaller(callers, routeSpecs, '/a')).toEqual('bar');
  });
});
