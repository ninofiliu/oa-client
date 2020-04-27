"use strict";

var _validateBody = _interopRequireDefault(require("./validate-body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validateBody', () => {
  it('throws for a body that does not match the body schema', () => {
    const routeSpecs = {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'number'
            }
          }
        }
      }
    };
    const contentType = 'application/json';
    const body = 'hello';
    expect(() => (0, _validateBody.default)(routeSpecs, contentType, body)).toThrow('[oa-client:103]');
  });
  it('does not throw for a body that matches the body schema', () => {
    const routeSpecs = {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'number'
            }
          }
        }
      }
    };
    const contentType = 'application/json';
    const body = 10;
    expect(() => (0, _validateBody.default)(routeSpecs, contentType, body)).not.toThrow();
  });
});