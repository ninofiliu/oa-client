import type { RequestBodyObject } from "openapi3-ts";
import validate from "./validate";
import OAClientError from "../../errors/OAClientError";
import type { RouteSpecs } from "../../types";

export default (routeSpecs: RouteSpecs, contentType: string, body: any) => {
  const requestBody = routeSpecs.requestBody as RequestBodyObject;
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
