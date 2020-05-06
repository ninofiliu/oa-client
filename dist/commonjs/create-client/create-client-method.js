"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_route_specs_1 = __importDefault(require("./get-route-specs"));
const get_caller_1 = __importDefault(require("./get-caller"));
const get_origin_1 = __importDefault(require("./get-origin"));
const get_call_path_1 = __importDefault(require("./get-call-path"));
const validate_request_1 = __importDefault(require("./validate-request"));
exports.default = (specs, callers, method, origin, validationLevel) => ((path, { pathParams = {}, queryParams = {}, body = null, contentType = 'application/json', } = { pathParams: {}, queryParams: {}, body: null, contentType: 'application/json' }) => __awaiter(void 0, void 0, void 0, function* () {
    const routeSpecs = get_route_specs_1.default(specs, path, method);
    validate_request_1.default(validationLevel, routeSpecs, pathParams, queryParams, body, contentType);
    const caller = get_caller_1.default(callers, routeSpecs, path);
    const callOrigin = get_origin_1.default(origin, specs);
    const callPath = get_call_path_1.default(path, pathParams);
    const callUrl = new URL(callOrigin + callPath);
    for (const key in queryParams) {
        callUrl.searchParams.append(key, queryParams[key]);
    }
    return caller(callUrl, body);
}));
