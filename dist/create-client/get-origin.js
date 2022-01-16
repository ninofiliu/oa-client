import OAClientError from '../errors/OAClientError';
export default (origin, specs) => {
    if (origin)
        return origin;
    if (!specs.servers || !specs.servers[0].url) {
        throw new OAClientError(3);
    }
    return specs.servers[0].url;
};
