"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createClient', () => {
  it('has one method for each HTTP method', () => {
    const specs = {
      servers: [{
        url: 'http://my.server.com'
      }],
      paths: {}
    };
    const callers = {};
    const client = (0, _.default)(specs, callers);

    for (const method of ['get', 'head', 'post', 'put', 'delete', 'options', 'trace', 'patch']) {
      expect(typeof client[method]).toEqual('function');
    }
  });
});