"use strict";

var _getCallPath = _interopRequireDefault(require("./get-call-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getCallPath', () => {
  it('formats the path with the url params', () => {
    const path = '/hello/{world}/it-is/{sunny}';
    const urlParams = {
      world: 'moon',
      sunny: 'cloudy'
    };
    expect((0, _getCallPath.default)(path, urlParams)).toEqual('/hello/moon/it-is/cloudy');
  });
});