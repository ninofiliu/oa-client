import getCallPath from './get-call-path';

describe('getCallPath', () => {
  it('formats the path with the url params', () => {
    const path = '/hello/{world}/it-is/{sunny}';
    const pathParams = { world: 'moon', sunny: 'cloudy' };

    expect(getCallPath(path, pathParams)).toEqual('/hello/moon/it-is/cloudy');
  });
});
