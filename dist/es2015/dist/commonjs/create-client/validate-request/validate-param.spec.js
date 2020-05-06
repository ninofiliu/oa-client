"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_param_1 = __importDefault(require("./validate-param"));
describe('validateParam', () => {
    it('throws for absent required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = undefined;
        expect(() => validate_param_1.default(parameter, value)).toThrow('[oa-client:104]');
    });
    it('throws for invalid required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = 10.5;
        expect(() => validate_param_1.default(parameter, value)).toThrow('[oa-client:103]');
    });
    it('does not throw for valid required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = 10;
        expect(() => validate_param_1.default(parameter, value)).not.toThrow();
    });
});
