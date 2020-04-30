"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OAClientError_1 = __importDefault(require("../errors/OAClientError"));
exports.default = (origin, specs) => {
    if (origin)
        return origin;
    if (!specs.servers || !specs.servers[0].url) {
        throw new OAClientError_1.default(3);
    }
    return specs.servers[0].url;
};
