import getCaller from './get-caller';

describe('getCaller', () => {
  it('throws if the caller does not provide a fallback default function for get', () => {
    const callers = {};
    const routeSpecs = {};

    expect(() => getCaller(callers, routeSpecs, '/a', 'get')).toThrow('[oa-client:2]');
  });
  
  it('throws if the route specs specifies a type that is not a caller', () => {
    const callers = {};
    const routeSpecs = { 'x-type': 'foo' };

    expect(() => getCaller(callers, routeSpecs, '/a', 'get')).toThrow('[oa-client:2]');
  });
  it('returns callers[get]', () => {
    const callers = { get : 'bar' };
    const routeSpecs = { };
    
    expect(getCaller(callers, routeSpecs, '/a', 'get')).toEqual('bar');
  });
  it('returns callers[routeSpecs[\'x-type\']]', () => {
    const callers = { foo: 'bar' };
    const routeSpecs = { 'x-type': 'foo' };

    expect(getCaller(callers, routeSpecs, '/a', 'get')).toEqual('bar');
  });
});
