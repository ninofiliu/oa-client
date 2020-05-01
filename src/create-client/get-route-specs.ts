import OAClientError from '../errors/OAClientError';
import { Specs } from '../types';

export default (specs: Specs, path: string, method: string) => {
  if (!(path in specs.paths)) {
    throw new OAClientError(4, { path });
  }
  if (!(method in specs.paths[path])) {
    throw new OAClientError(5, { path, method, specs });
  }
  return specs.paths[path][method];
};
