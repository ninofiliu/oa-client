import createClient from '.';

const specs = {
  servers: [
    { url: 'http://my.server.com' },
  ],
  paths: {
    '/users/{id}': {
      post: {
        'x-type': 'simple-post',
      },
    },
  },
};
let callers;
let client;

describe('createClient', () => {
  beforeEach(() => {
    callers = {
      'simple-post': jest.fn(),
    };
    client = createClient(specs, callers, { validationLevel: 'error' });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('throws explicitly for non-existing path', () => {
    expect(() => {
      client['/non/existing/path'].get();
    }).toThrow('[oa-client:4]');
  });
  it('throws explicitly for non-existing methods', () => {
    expect(() => {
      client['/users/{id}'].get();
    }).toThrow('[oa-client:5]');
  });
  it('should call the right caller with a compiled URL and the body', () => {
    client['/users/{id}'].post({
      pathParams: { id: '123456' },
      queryParams: { foo: 'bar' },
      body: { some: 'data' },
    });

    const url = 'http://my.server.com/users/123456?foo=bar';
    expect(callers['simple-post'].mock.calls[0][0].toString()).toEqual(url);
    expect(callers['simple-post'].mock.calls[0][1]).toEqual({ some: 'data' });
  });
});
