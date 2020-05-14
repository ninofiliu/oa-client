import OAClientError from '../errors/OAClientError';
export default (specs, path, method) => {
    if (!(path in specs.paths)) {
        throw new OAClientError(4, { path });
    }
    if (!(method in specs.paths[path])) {
        throw new OAClientError(5, { path, method, specs });
    }
    return specs.paths[path][method];
};
