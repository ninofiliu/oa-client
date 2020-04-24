import createClientMethod from './create-client-method';

export default (specs, caller, origin = null) => ({
  get: createClientMethod(specs, caller, 'get', origin),
  head: createClientMethod(specs, caller, 'head', origin),
  post: createClientMethod(specs, caller, 'post', origin),
  put: createClientMethod(specs, caller, 'put', origin),
  delete: createClientMethod(specs, caller, 'delete', origin),
  options: createClientMethod(specs, caller, 'options', origin),
  trace: createClientMethod(specs, caller, 'trace', origin),
  patch: createClientMethod(specs, caller, 'patch', origin),
});
