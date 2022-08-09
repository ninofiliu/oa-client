import OAClientError from "../errors/OAClientError";
import type { Specs } from "../types";

export default (origin: null | string, specs: Specs) => {
  if (origin) return origin;
  if (!specs.servers || !specs.servers[0].url) {
    throw new OAClientError(3);
  }
  return specs.servers[0].url;
};
