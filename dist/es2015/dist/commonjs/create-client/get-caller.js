"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OAClientError_1 = __importDefault(require("../errors/OAClientError"));
exports.default = (callers, routeSpecs, path) => {
    if (!routeSpecs['x-type']) {
        throw new OAClientError_1.default(1, { path });
    }
    const type = routeSpecs['x-type'];
    if (!(type in callers)) {
        throw new OAClientError_1.default(2, { type, callers });
    }
    return callers[type];
};
