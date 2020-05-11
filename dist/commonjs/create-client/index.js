"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_caller_1 = __importDefault(require("./get-caller"));
const get_origin_1 = __importDefault(require("./get-origin"));
const get_call_path_1 = __importDefault(require("./get-call-path"));
const validate_request_1 = __importDefault(require("./validate-request"));
const OAClientError_1 = __importDefault(require("../errors/OAClientError"));
exports.default = (specs, callers, { origin = null, validationLevel = 'off', } = { origin: null, validationLevel: 'off' }) => new Proxy({}, {
    get(client, path) {
        if (!(path in specs.paths)) {
            throw new OAClientError_1.default(4, { path });
        }
        return new Proxy({}, {
            get(clientPath, method) {
                if (!(method in specs.paths[path])) {
                    throw new OAClientError_1.default(5, { path, method, specs });
                }
                return ({ pathParams = {}, queryParams = {}, body = null, contentType = 'application/json', } = { pathParams: {}, queryParams: {}, body: null, contentType: 'application/json' }) => {
                    const routeSpecs = specs.paths[path][method];
                    validate_request_1.default(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
                    const caller = get_caller_1.default(callers, routeSpecs, path);
                    const callOrigin = get_origin_1.default(origin, specs);
                    const callPath = get_call_path_1.default(path, pathParams);
                    const callUrl = new URL(callOrigin + callPath);
                    for (const key in queryParams) {
                        callUrl.searchParams.append(key, queryParams[key]);
                    }
                    return caller(callUrl, body);
                };
            },
        });
    },
});
