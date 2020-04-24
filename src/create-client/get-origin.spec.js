import getOrigin from './get-origin';

describe('getOrigin', () => {
  it('returns origin if truthy', () => {
    const origin = 'some-origin';
    const specs = {};

    expect(getOrigin(origin, specs)).toEqual('some-origin');
  });
  it('throws if origin is falsy and the specs precises no server URL', () => {
    const origin = null;
    const specs = { servers: [] };

    expect(() => getOrigin(origin, specs)).toThrow();
  });
  it('returns specs.servers[0].url if it exists and origin is falsy', () => {
    const origin = null;
    const specs = { servers: [{ url: 'some-url' }] };

    expect(getOrigin(origin, specs)).toEqual('some-url');
  });
});
