"use strict";

var _validateParam = _interopRequireDefault(require("./validate-param"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validateParam', () => {
  it('throws for absent required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: {
        type: 'integer'
      }
    };
    const value = undefined;
    expect(() => (0, _validateParam.default)(validationLevel, parameter, value)).toThrow();
  });
  it('throws for invalid required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: {
        type: 'integer'
      }
    };
    const value = 10.5;
    expect(() => (0, _validateParam.default)(validationLevel, parameter, value)).toThrow();
  });
  it('does not throw for valid required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: {
        type: 'integer'
      }
    };
    const value = 10;
    expect(() => (0, _validateParam.default)(validationLevel, parameter, value)).not.toThrow();
  });
});