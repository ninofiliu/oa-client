"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_route_specs_1 = __importDefault(require("./get-route-specs"));
describe('getRouteSpecs', () => {
    it('should fail for non existing paths', () => {
        const specs = {
            paths: {
                '/a': {
                    get: {},
                },
            },
        };
        expect(() => get_route_specs_1.default(specs, '/b', 'get')).toThrow('[oa-client:4]');
    });
    it('should get specs.paths[path][method]', () => {
        const specs = {
            paths: {
                '/a': {
                    get: {
                        hello: 'world',
                    },
                },
            },
        };
        expect(get_route_specs_1.default(specs, '/a', 'get')).toEqual({ hello: 'world' });
    });
});
