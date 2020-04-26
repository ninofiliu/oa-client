import validate from './validate';

export default (validationLevel, routeSpecs, contentType, body) => {
  const { requestBody } = routeSpecs;
  if (!requestBody) { return; }
  if (!body && !requestBody.required) { return; }
  if (!body && requestBody.required) {
    throw new Error('No body passed, but the route requires one');
  }
  if (!requestBody.content[contentType]) {
    throw new Error(`Route does not handle requests of type ${contentType}`);
  }
  const { schema } = requestBody.content[contentType];
  validate(validationLevel, schema, body);
};
