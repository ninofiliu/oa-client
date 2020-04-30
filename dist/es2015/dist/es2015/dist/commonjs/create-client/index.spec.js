"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
describe('createClient', () => {
    it('has one method for each HTTP method', () => {
        const specs = {
            servers: [{ url: 'http://my.server.com' }],
            paths: {},
        };
        const callers = {};
        const client = _1.default(specs, callers);
        for (const method of ['get', 'head', 'post', 'put', 'delete', 'options', 'trace', 'patch']) {
            expect(typeof client[method]).toEqual('function');
        }
    });
});
