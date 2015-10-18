module.exports = function termiteExamplePlugin(app) {
  process.stdout.write(app.name);
  return {
    name: 'example',
    path: __dirname
  };
};
