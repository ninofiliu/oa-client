"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const OAClientError_1 = __importDefault(require("../../errors/OAClientError"));
exports.default = (parameter, value) => {
    if (!value && !parameter.required)
        return;
    if (!value && parameter.required)
        throw new OAClientError_1.default(104, { parameter });
    const schema = parameter.schema || parameter.content;
    validate_1.default(schema, value);
};
