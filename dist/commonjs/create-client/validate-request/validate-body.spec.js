"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_body_1 = __importDefault(require("./validate-body"));
describe('validateBody', () => {
    it('throws for a body that does not match the body schema', () => {
        const routeSpecs = {
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'number',
                        },
                    },
                },
            },
        };
        const contentType = 'application/json';
        const body = 'hello';
        expect(() => validate_body_1.default(routeSpecs, contentType, body)).toThrow('[oa-client:103]');
    });
    it('does not throw for a body that matches the body schema', () => {
        const routeSpecs = {
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'number',
                        },
                    },
                },
            },
        };
        const contentType = 'application/json';
        const body = 10;
        expect(() => validate_body_1.default(routeSpecs, contentType, body)).not.toThrow();
    });
});
