import { ValidationLevel } from '../types';
declare const _default: (specs: import("openapi3-ts").OpenAPIObject, callers: Record<string, import("../types").Caller>, { origin, validationLevel, }?: {
    origin: string | null;
    validationLevel: ValidationLevel;
}) => {
    get: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    head: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    post: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    put: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    delete: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    options: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    trace: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
    patch: (path: string, { pathParams, queryParams, body, contentType, }?: {
        pathParams: Record<string, any>;
        queryParams: Record<string, any>;
        body: any;
        contentType: string;
    }) => Promise<any>;
};
export default _default;
