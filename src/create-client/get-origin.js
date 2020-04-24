export default (origin, specs) => {
  if (origin) return origin;
  if (!specs.servers || !specs.servers[0].url) {
    throw new Error('No origin nor server URL specified. Call createClient with an origin argument, or specify .servers[0].url in your OpenAPI specs.');
  }
  return specs.servers[0].url;
};
