import type { OpenAPIObject, OperationObject } from 'openapi3-ts';

export type Specs = OpenAPIObject;
export type RouteSpecs = OperationObject;
export type Caller = (url: URL, body?: any) => Promise<any>;
export type Callers = Record<string, Caller>;
export type ValidationLevel = 'off' | 'warn' | 'error';
export type Params = Record<string, any>;
