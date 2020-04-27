import validate from './validate';
import OAClientError from '../../errors/OAClientError';
import messages from '../../errors/messages';

export default (validationLevel, parameter, value) => {
  if (!value && !parameter.required) return;
  if (!value && parameter.required) {
    switch (validationLevel) {
      case 'warn':
        // eslint-disable-next-line no-console
        console.warn(messages[104]({ parameter }));
        return;
      case 'error':
        throw new OAClientError(104, { parameter });
    }
  }
  const schema = parameter.schema || parameter.content;
  validate(validationLevel, schema, value);
};
