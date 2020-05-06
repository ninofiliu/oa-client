"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const OAClientError_1 = __importDefault(require("../../errors/OAClientError"));
const ajv = new ajv_1.default();
exports.default = (schema, data) => {
    if (!schema)
        throw new OAClientError_1.default(105, { schema });
    const valid = ajv.validate(schema, data);
    if (valid)
        return;
    throw new OAClientError_1.default(103, { ajvError: ajv.errors[0], data });
};
