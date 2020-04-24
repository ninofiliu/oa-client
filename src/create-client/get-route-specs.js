export default (specs, path, method) => {
  if (!(path in specs.paths)) {
    throw new Error(`The path ${path} does not exist.`);
  }
  if (!(method in specs.paths[path])) {
    throw new Error(`The method ${method} is not handled for the path ${path}.`);
  }
  return specs.paths[path][method];
};
