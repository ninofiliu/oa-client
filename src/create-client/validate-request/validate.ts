import Ajv from "ajv";
import OAClientError from "../../errors/OAClientError";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

export default (schema: any, data: any) => {
  if (!schema) throw new OAClientError(105, { schema });
  const valid = ajv.validate(schema, data);
  if (valid) return;
  throw new OAClientError(103, { ajvError: ajv.errors![0]!, data });
};
