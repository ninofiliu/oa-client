import validateParam from './validate-param';
describe('validateParam', () => {
    it('throws for absent required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = undefined;
        expect(() => validateParam(parameter, value)).toThrow('[oa-client:104]');
    });
    it('throws for invalid required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = 10.5;
        expect(() => validateParam(parameter, value)).toThrow('[oa-client:103]');
    });
    it('does not throw for valid required parameter', () => {
        const parameter = {
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'integer' },
        };
        const value = 10;
        expect(() => validateParam(parameter, value)).not.toThrow();
    });
});
