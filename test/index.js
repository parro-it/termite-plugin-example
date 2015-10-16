const test = require('tape-async');
const termitePluginExample = require('..');

test('add details files', function *(t) {
  const result = yield termitePluginExample();
  t.equal(result, 42);
});
