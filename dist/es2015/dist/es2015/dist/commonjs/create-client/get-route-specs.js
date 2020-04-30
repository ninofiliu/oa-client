"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OAClientError_1 = __importDefault(require("../errors/OAClientError"));
exports.default = (specs, path, method) => {
    if (!(path in specs.paths)) {
        throw new OAClientError_1.default(4, { path });
    }
    if (!(method in specs.paths[path])) {
        throw new OAClientError_1.default(5, { path, method, specs });
    }
    return specs.paths[path][method];
};
