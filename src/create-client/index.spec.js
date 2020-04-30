import createClient from '.';

describe('createClient', () => {
  it('has one method for each HTTP method', () => {
    const specs = {
      servers: [{ url: 'http://my.server.com' }],
      paths: {},
    };
    const callers = {};
    const client = createClient(specs, callers);

    for (const method of ['get', 'head', 'post', 'put', 'delete', 'options', 'trace', 'patch']) {
      expect(typeof client[method]).toEqual('function');
    }
  });
});
