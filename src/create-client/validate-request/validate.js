import Ajv from 'ajv';
import messages from '../../errors/messages';
import OAClientError from '../../errors/OAClientError';

const ajv = new Ajv();

export default (validationLevel, schema, data) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;
  if (validationLevel === 'warn') {
    const message = messages[103]({ ajvError: ajv.errors[0], data });
    // eslint-disable-next-line no-console
    console.warn(message);
  }
  if (validationLevel === 'error') throw new OAClientError(103, { ajvError: ajv.errors[0], data });
};
