"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validateRequest', () => {
  it('throws for invalid path params', () => {
    const validationLevel = 'error';
    const routeSpecs = {
      parameters: [{
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'integer'
        }
      }]
    };
    const pathParams = {
      id: '20'
    };
    const queryParams = {};
    const body = undefined;
    const contentType = 'application/json';
    expect(() => (0, _.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType)).toThrow('[oa-client:103]');
  });
  it('throws for invalid query params', () => {
    const validationLevel = 'error';
    const routeSpecs = {
      parameters: [{
        in: 'query',
        name: 'age',
        required: true,
        schema: {
          type: 'integer'
        }
      }]
    };
    const pathParams = {};
    const queryParams = {
      age: 20.5
    };
    const body = undefined;
    const contentType = 'application/json';
    expect(() => (0, _.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType)).toThrow('[oa-client:103]');
  });
  it('throws for invalid body', () => {
    const validationLevel = 'error';
    const routeSpecs = {
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'integer'
            }
          }
        }
      }
    };
    const pathParams = {};
    const queryParams = {};
    const body = 'hello';
    const contentType = 'application/json';
    expect(() => (0, _.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType)).toThrow('[oa-client:103]');
  });
  it('does not throw for valid all', () => {
    const validationLevel = 'error';
    const routeSpecs = {
      parameters: [{
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'integer'
        }
      }, {
        in: 'query',
        name: 'age',
        required: true,
        schema: {
          type: 'integer'
        }
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'integer'
            }
          }
        }
      }
    };
    const pathParams = {
      id: 20
    };
    const queryParams = {
      age: 30
    };
    const body = 40;
    const contentType = 'application/json';
    expect(() => (0, _.default)(validationLevel, routeSpecs, pathParams, queryParams, body, contentType)).not.toThrow();
  });
});