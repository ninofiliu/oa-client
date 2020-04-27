import validate from './validate';

describe('validate', () => {
  it('throws if data does not match schema, with an explanative message', () => {
    const validationLevel = 'error';
    const schema = {
      type: 'object',
      properties: {
        foo: { type: 'number' },
        bar: { type: 'string' },
      },
    };
    const data = {
      foo: '10',
      bar: 10,
    };

    expect(() => validate(validationLevel, schema, data)).toThrow([
      '[oa-client:103] Data does not pass validation: data.foo should be number',
      'schema path: #/properties/foo/type',
      'params: {"type":"number"}',
      'data: {"foo":"10","bar":10}',
    ].join('\n'));
  });
  it('does not throw if data matches schema', () => {
    const validationLevel = 'error';
    const schema = { type: 'number' };
    const data = 10;

    expect(() => validate(validationLevel, schema, data)).not.toThrow();
  });
});
