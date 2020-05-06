"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_client_method_1 = __importDefault(require("./create-client-method"));
describe('createClientMethod', () => {
    it('should call the right caller with a compiled URL and the body', () => {
        const specs = {
            servers: [
                { url: 'http://my.server.com' },
            ],
            paths: {
                '/users/{id}': {
                    post: {
                        'x-type': 'simple-post',
                    },
                },
            },
        };
        const callers = {
            'simple-post': jest.fn(),
        };
        const method = create_client_method_1.default(specs, callers, 'post', null, 'error');
        method('/users/{id}', {
            pathParams: { id: '123456' },
            queryParams: { foo: 'bar' },
            body: { some: 'data' },
        });
        const url = 'http://my.server.com/users/123456?foo=bar';
        expect(callers['simple-post'].mock.calls[0][0].toString()).toEqual(url);
        expect(callers['simple-post'].mock.calls[0][1]).toEqual({ some: 'data' });
    });
});
