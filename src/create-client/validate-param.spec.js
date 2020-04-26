import validateParam from './validate-param';

describe('validateParam', () => {
  it('throws for absent required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: { type: 'integer' },
    };
    const value = undefined;

    expect(() => validateParam(validationLevel, parameter, value)).toThrow();
  });
  it('throws for invalid required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: { type: 'integer' },
    };
    const value = 10.5;

    expect(() => validateParam(validationLevel, parameter, value)).toThrow();
  });
  it('does not throw for valid required parameter', () => {
    const validationLevel = 'error';
    const parameter = {
      in: 'query',
      name: 'userId',
      required: true,
      schema: { type: 'integer' },
    };
    const value = 10;

    expect(() => validateParam(validationLevel, parameter, value)).not.toThrow();
  });
});
