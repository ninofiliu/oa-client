"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_caller_1 = __importDefault(require("./get-caller"));
describe('getCaller', () => {
    it('throws if the route specs does not specify a type', () => {
        const callers = {};
        const routeSpecs = {};
        expect(() => get_caller_1.default(callers, routeSpecs, '/a')).toThrow('[oa-client:1]');
    });
    it('throws if the route specs specifies a type that is not a caller', () => {
        const callers = {};
        const routeSpecs = { 'x-type': 'foo' };
        expect(() => get_caller_1.default(callers, routeSpecs, '/a')).toThrow('[oa-client:2]');
    });
    it('returns callers[routeSpecs[\'x-type\']]', () => {
        const callers = { foo: 'bar' };
        const routeSpecs = { 'x-type': 'foo' };
        expect(get_caller_1.default(callers, routeSpecs, '/a')).toEqual('bar');
    });
});
