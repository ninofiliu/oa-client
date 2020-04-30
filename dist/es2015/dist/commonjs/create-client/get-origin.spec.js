"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_origin_1 = __importDefault(require("./get-origin"));
describe('getOrigin', () => {
    it('returns origin if truthy', () => {
        const origin = 'some-origin';
        const specs = {};
        expect(get_origin_1.default(origin, specs)).toEqual('some-origin');
    });
    it('throws if origin is falsy and the specs precises no server URL', () => {
        const origin = null;
        const specs = {};
        expect(() => get_origin_1.default(origin, specs)).toThrow('[oa-client:3]');
    });
    it('returns specs.servers[0].url if it exists and origin is falsy', () => {
        const origin = null;
        const specs = { servers: [{ url: 'some-url' }] };
        expect(get_origin_1.default(origin, specs)).toEqual('some-url');
    });
});
