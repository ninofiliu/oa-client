import validate from './validate';

export default (validationLevel, parameter, value) => {
  if (!value && !parameter.required) return;
  if (!value && parameter.required) throw new Error(`${parameter.name} is required`);
  const schema = parameter.schema || parameter.content;
  validate(validationLevel, schema, value);
};
