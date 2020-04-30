"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_client_method_1 = __importDefault(require("./create-client-method"));
exports.default = (specs, callers, { origin = null, validationLevel = 'off', } = { origin: null, validationLevel: 'off' }) => ({
    get: create_client_method_1.default(specs, callers, 'get', origin, validationLevel),
    head: create_client_method_1.default(specs, callers, 'head', origin, validationLevel),
    post: create_client_method_1.default(specs, callers, 'post', origin, validationLevel),
    put: create_client_method_1.default(specs, callers, 'put', origin, validationLevel),
    delete: create_client_method_1.default(specs, callers, 'delete', origin, validationLevel),
    options: create_client_method_1.default(specs, callers, 'options', origin, validationLevel),
    trace: create_client_method_1.default(specs, callers, 'trace', origin, validationLevel),
    patch: create_client_method_1.default(specs, callers, 'patch', origin, validationLevel),
});
