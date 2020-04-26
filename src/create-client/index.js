import createClientMethod from './create-client-method';

export default (
  specs,
  callers,
  {
    origin = null,
    validationLevel = 'off',
  } = { origin: null, validationLevel: 'off' },
) => ({
  get: createClientMethod(specs, callers, 'get', origin, validationLevel),
  head: createClientMethod(specs, callers, 'head', origin, validationLevel),
  post: createClientMethod(specs, callers, 'post', origin, validationLevel),
  put: createClientMethod(specs, callers, 'put', origin, validationLevel),
  delete: createClientMethod(specs, callers, 'delete', origin, validationLevel),
  options: createClientMethod(specs, callers, 'options', origin, validationLevel),
  trace: createClientMethod(specs, callers, 'trace', origin, validationLevel),
  patch: createClientMethod(specs, callers, 'patch', origin, validationLevel),
});
