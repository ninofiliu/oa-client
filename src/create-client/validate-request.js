import validateParam from './validate-param';
import validateBody from './validate-body';

export default (validationLevel, routeSpecs, pathParams, queryParams, body, contentType) => {
  if (validationLevel === 'off') return;
  for (const parameter of routeSpecs.parameters) {
    const value = {
      path: pathParams,
      query: queryParams,
    }[parameter.in][parameter.name];
    validateParam(validationLevel, parameter, value);
  }
  validateBody(validationLevel, routeSpecs, contentType, body);
};
