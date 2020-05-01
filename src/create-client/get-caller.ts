import OAClientError from '../errors/OAClientError';
import { Callers, RouteSpecs } from '../types';

export default (callers: Callers, routeSpecs: RouteSpecs, path: string) => {
  if (!routeSpecs['x-type']) {
    throw new OAClientError(1, { path });
  }
  const type = routeSpecs['x-type'];
  if (!(type in callers)) {
    throw new OAClientError(2, { type, callers });
  }
  return callers[type];
};
