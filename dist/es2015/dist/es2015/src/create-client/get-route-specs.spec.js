import getRouteSpecs from './get-route-specs';
describe('getRouteSpecs', () => {
    it('should fail for non existing paths', () => {
        const specs = {
            paths: {
                '/a': {
                    get: {},
                },
            },
        };
        expect(() => getRouteSpecs(specs, '/b', 'get')).toThrow('[oa-client:4]');
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
        expect(getRouteSpecs(specs, '/a', 'get')).toEqual({ hello: 'world' });
    });
});
