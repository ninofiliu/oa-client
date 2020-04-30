"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_call_path_1 = __importDefault(require("./get-call-path"));
describe('getCallPath', () => {
    it('formats the path with the url params', () => {
        const path = '/hello/{world}/it-is/{sunny}';
        const pathParams = { world: 'moon', sunny: 'cloudy' };
        expect(get_call_path_1.default(path, pathParams)).toEqual('/hello/moon/it-is/cloudy');
    });
});
