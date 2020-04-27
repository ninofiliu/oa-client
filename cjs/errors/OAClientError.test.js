"use strict";

var _OAClientError = _interopRequireDefault(require("./OAClientError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('OAClientError', () => {
  it('creates instances of OAClientError', () => {
    const error = new _OAClientError.default(0, {
      test: 'xxx'
    });
    expect(error instanceof _OAClientError.default).toBe(true);
    expect(new Error() instanceof _OAClientError.default).toBe(false);
  });
  it('sets .code', () => {
    const error = new _OAClientError.default(0, {
      test: 'xxx'
    });
    expect(error.code).toEqual(0);
  });
  it('formats a message', () => {
    const error = new _OAClientError.default(0, {
      test: 'xxx'
    });
    expect(error.message).toEqual('[oa-client:0] Test is equal to xxx');
  });
});