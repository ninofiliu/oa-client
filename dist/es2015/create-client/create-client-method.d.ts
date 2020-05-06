import { ValidationLevel } from '../types';
declare const _default: (specs: import("openapi3-ts").OpenAPIObject, callers: Record<string, import("../types").Caller>, method: string, origin: string | null, validationLevel: ValidationLevel) => (path: string, { pathParams, queryParams, body, contentType, }?: {
    pathParams: Record<string, any>;
    queryParams: Record<string, any>;
    body: any;
    contentType: string;
}) => Promise<any>;
export default _default;
