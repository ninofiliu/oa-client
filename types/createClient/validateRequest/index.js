import validateParam from "./validateParam";
import validateBody from "./validateBody";
export default (validationLevel, routeSpecs, pathParams, queryParams, body, contentType) => {
    if (validationLevel === "off")
        return;
    try {
        if (routeSpecs.parameters) {
            for (const parameter of routeSpecs.parameters) {
                const value = {
                    path: pathParams,
                    query: queryParams,
                }[parameter.in][parameter.name];
                validateParam(parameter, value);
            }
        }
        validateBody(routeSpecs, contentType, body);
    }
    catch (e) {
        if (!(e instanceof Error))
            throw e;
        if (!e.message.startsWith("[oa-client:"))
            throw e;
        if (validationLevel === "warn")
            console.warn(e);
        throw e;
    }
};
