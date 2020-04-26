"use strict";

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validate', () => {
  it('throws if data does not match schema', () => {
    const validationLevel = 'error';
    const schema = {
      type: 'number'
    };
    const data = 'hello';
    expect(() => (0, _validate.default)(validationLevel, schema, data)).toThrow();
  });
  it('does not throw if data matches schema', () => {
    const validationLevel = 'error';
    const schema = {
      type: 'number'
    };
    const data = 10;
    expect(() => (0, _validate.default)(validationLevel, schema, data)).not.toThrow();
  });
});