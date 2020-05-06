"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const OAClientError_1 = __importDefault(require("../../errors/OAClientError"));
exports.default = (routeSpecs, contentType, body) => {
    const requestBody = routeSpecs.requestBody;
    if (!requestBody) {
        return;
    }
    if (!body && !requestBody.required) {
        return;
    }
    if (!body && requestBody.required) {
        throw new OAClientError_1.default(101);
    }
    if (!requestBody.content[contentType]) {
        throw new OAClientError_1.default(102, { contentType, requestBody });
    }
    const { schema } = requestBody.content[contentType];
    validate_1.default(schema, body);
};
