"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("./messages"));
class OAClientError extends Error {
    constructor(code, data) {
        super(`[oa-client:${code}] ${messages_1.default[code](data)}`);
        this.code = code;
    }
}
exports.default = OAClientError;
