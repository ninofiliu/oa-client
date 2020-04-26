import createClientMethod from './create-client-method';

export default (
  specs,
  caller,
  {
    origin = null,
    validationLevel = 'off',
  } = { origin: null, validationLevel: 'off' },
) => ({
  get: createClientMethod(specs, caller, 'get', origin, validationLevel),
  head: createClientMethod(specs, caller, 'head', origin, validationLevel),
  post: createClientMethod(specs, caller, 'post', origin, validationLevel),
  put: createClientMethod(specs, caller, 'put', origin, validationLevel),
  delete: createClientMethod(specs, caller, 'delete', origin, validationLevel),
  options: createClientMethod(specs, caller, 'options', origin, validationLevel),
  trace: createClientMethod(specs, caller, 'trace', origin, validationLevel),
  patch: createClientMethod(specs, caller, 'patch', origin, validationLevel),
});
