import validate from './validate';
import OAClientError from '../../errors/OAClientError';
export default (routeSpecs, contentType, body) => {
    const { requestBody } = routeSpecs;
    if (!requestBody) {
        return;
    }
    if (!body && !requestBody.required) {
        return;
    }
    if (!body && requestBody.required) {
        throw new OAClientError(101);
    }
    if (!requestBody.content[contentType]) {
        throw new OAClientError(102, { contentType, requestBody });
    }
    const { schema } = requestBody.content[contentType];
    validate(schema, body);
};
