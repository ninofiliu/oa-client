import validateBody from './validate-body';

describe('validateBody', () => {
  it('throws for a body that does not match the body schema', () => {
    const routeSpecs = {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'number',
            },
          },
        },
      },
    };
    const contentType = 'application/json';
    const body = 'hello';

    expect(() => validateBody(routeSpecs, contentType, body)).toThrow('[oa-client:103]');
  });
  it('does not throw for a body that matches the body schema', () => {
    const routeSpecs = {
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'number',
            },
          },
        },
      },
    };
    const contentType = 'application/json';
    const body = 10;

    expect(() => validateBody(routeSpecs, contentType, body)).not.toThrow();
  });
});
