"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_param_1 = __importDefault(require("./validate-param"));
const validate_body_1 = __importDefault(require("./validate-body"));
exports.default = (validationLevel, routeSpecs, pathParams, queryParams, body, contentType) => {
    if (validationLevel === 'off')
        return;
    try {
        if (routeSpecs.parameters) {
            for (const parameter of routeSpecs.parameters) {
                const value = {
                    path: pathParams,
                    query: queryParams,
                }[parameter.in][parameter.name];
                validate_param_1.default(parameter, value);
            }
        }
        validate_body_1.default(routeSpecs, contentType, body);
    }
    catch (e) {
        if (!e.message.startsWith('[oa-client:'))
            throw e;
        // eslint-disable-next-line no-console
        if (validationLevel === 'warn')
            console.warn(e);
        throw e;
    }
};
