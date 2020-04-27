export default (callers, routeSpecs, path) => {
  if (!routeSpecs['x-type']) {
    throw new Error(`The path ${path} does not specify a route type. Make sure your OpenAPI specs have a .paths['${path}']['x-type'] key.`);
  }
  const type = routeSpecs['x-type'];
  if (!(type in callers)) {
    throw new Error(`The caller ${type} doesn't exist. Make sure your caller object has a ${type} key.`);
  }
  return callers[type];
};
