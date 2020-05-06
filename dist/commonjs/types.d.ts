import { OpenAPIObject, OperationObject } from 'openapi3-ts';
export declare type Specs = OpenAPIObject;
export declare type RouteSpecs = OperationObject;
export declare type Caller = (url: URL, body?: any) => Promise<any>;
export declare type Callers = Record<string, Caller>;
export declare type ValidationLevel = 'off' | 'warn' | 'error';
export declare type Params = Record<string, any>;
