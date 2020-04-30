"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OAClientError_1 = __importDefault(require("./OAClientError"));
describe('OAClientError', () => {
    it('creates instances of OAClientError', () => {
        const error = new OAClientError_1.default(0, { test: 'xxx' });
        expect(error instanceof OAClientError_1.default).toBe(true);
        expect(new Error() instanceof OAClientError_1.default).toBe(false);
    });
    it('sets .code', () => {
        const error = new OAClientError_1.default(0, { test: 'xxx' });
        expect(error.code).toEqual(0);
    });
    it('formats a message', () => {
        const error = new OAClientError_1.default(0, { test: 'xxx' });
        expect(error.message).toEqual('[oa-client:0] Test is equal to xxx');
    });
});
