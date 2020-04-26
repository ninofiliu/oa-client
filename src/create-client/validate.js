import Ajv from 'ajv';

const ajv = new Ajv();

export default (validationLevel, schema, data) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;
  const message = `Data does not pass validation: ${ajv.errors}`;
  // eslint-disable-next-line no-console
  if (validationLevel === 'warn') console.warn(message);
  if (validationLevel === 'error') throw new Error(message);
};
