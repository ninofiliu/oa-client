import OAClientError from '../errors/OAClientError';
import { Callers, RouteSpecs } from '../types';

export default (callers: Callers, routeSpecs: RouteSpecs, path: string, method :string) => {
  // Fallback to a default call for the specified method
  const type = routeSpecs['x-type'] ?? method;

  if (!(type in callers)) {
    throw new OAClientError(2, { type, callers });
  }
  return callers[type];
};
