const cypressNuxt = require("cypress-nuxt");

module.exports = async (on, config) => { // make sure to include "async"!
  on("file:preprocessor", await filePreprocessor()); // make sure to include "await"!

  // other plugins...
  return config;
};

function filePreprocessor() {
  require("ts-node").register({
    compilerOptions: {
      target: "es5",
      module: "commonjs" // node expects commonjs format
    }
  });
  // return the promise to return the webpack config
  return cypressNuxt.plugin({})
}
