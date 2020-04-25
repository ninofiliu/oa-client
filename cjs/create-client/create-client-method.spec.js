"use strict";

var _createClientMethod = _interopRequireDefault(require("./create-client-method"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createClientMethod', () => {
  it('should call the right caller with a compiled URL and the body', () => {
    const specs = {
      servers: [{
        url: 'http://my.server.com'
      }],
      paths: {
        '/users/{id}': {
          post: {
            type: 'simple-post'
          }
        }
      }
    };
    const callers = {
      'simple-post': jest.fn()
    };
    const method = (0, _createClientMethod.default)(specs, callers, 'post');
    method('/users/{id}', {
      pathParams: {
        id: '123456'
      },
      queryParams: {
        foo: 'bar'
      },
      body: {
        some: 'data'
      }
    });
    const url = 'http://my.server.com/users/123456?foo=bar';
    expect(callers['simple-post'].mock.calls[0][0].toString()).toEqual(url);
    expect(callers['simple-post'].mock.calls[0][1]).toEqual({
      some: 'data'
    });
  });
});