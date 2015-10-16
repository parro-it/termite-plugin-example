module.exports = function termiteExamplePlugin(app) {
  app.packages.example = {
    name: 'termite-example-plugin',
    path: __dirname
  };
};
