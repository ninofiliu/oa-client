import validate from './validate';

describe('validate', () => {
  it('throws if data does not match schema', () => {
    const validationLevel = 'error';
    const schema = { type: 'number' };
    const data = 'hello';

    expect(() => validate(validationLevel, schema, data)).toThrow();
  });
  it('does not throw if data matches schema', () => {
    const validationLevel = 'error';
    const schema = { type: 'number' };
    const data = 10;

    expect(() => validate(validationLevel, schema, data)).not.toThrow();
  });
});
