const { addBeforeLoader, loaderByName } = require('@craco/craco');
const rawLoader = require('craco-raw-loader');

module.exports = {
  plugins: [
    { 
      plugin: rawLoader,
      options: { test: /\.zok$/ }, // For zokrates files
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      const wasmExtensionRegExp = /\.wasm$/;
      webpackConfig.resolve.extensions.push('.wasm');

      webpackConfig.module.rules.forEach((rule) => {
        (rule.oneOf || []).forEach((oneOf) => {
          if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
            oneOf.exclude.push(wasmExtensionRegExp);
          }
        });
      });

      // For zokrates code, which is rust compiled to wasm
      const wasmLoader = {
        test: /\.wasm$/,
        exclude: /node_modules/,
        loaders: ['wasm-loader'],
      };

      // For zokrates keys which we need to load as int array instead of raw string
      const arraybufferLoader = {
        test: /\.key$/,
        exclude: /node_modules/,
        loaders: ['arraybuffer-loader'],
      };

      addBeforeLoader(webpackConfig, loaderByName('file-loader'), wasmLoader);
      addBeforeLoader(webpackConfig, loaderByName('file-loader'), arraybufferLoader);

      return webpackConfig;
    },
  }
};

