import getCaller from './get-caller';

describe('getCaller', () => {
  it('returns callers[routeSpecs[\'x-type\']] if it exists', () => {
    const callers = { foo: 'FOO_CALLER' };
    const routeSpecs = { 'x-type': 'foo' };

    expect(getCaller(callers, routeSpecs, 'get')).toEqual('FOO_CALLER');
  });
  it('returns callers[method] if it exists', () => {
    const callers = { get: 'GET_CALLER', post: 'POST_CALLER' };
    const routeSpecs = { };

    expect(getCaller(callers, routeSpecs, 'post')).toEqual('POST_CALLER');
  });
  it('throws if no caller matches', () => {
    const callers = {};
    const routeSpecs = { 'x-type': 'foo' };

    expect(() => getCaller(callers, routeSpecs, 'get')).toThrow('[oa-client:2]');
  });
});
