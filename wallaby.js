module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      'src/**/*.tsx',
      { pattern: 'src/**/*.spec.ts', ignore: true },
      { pattern: 'src/**/*.spec.tsx', ignore: true },
    ],

    tests: [
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx',
    ],

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
                                   file.content,
                                   {sourceMap: true, presets: ['latest']})
    },

    testFramework: 'mocha',

    env: {
      type: 'node'
    },

    setup: function () {
      require('babel-polyfill');
      const { JSDOM } = require('jsdom');
      const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
      const { window } = jsdom;

      function copyProps(src, target) {
        const props = Object.getOwnPropertyNames(src)
          .filter(prop => typeof target[prop] === 'undefined')
          .map(prop => Object.getOwnPropertyDescriptor(src, prop));
        Object.defineProperties(target, props);
      }

      global.window = window;
      global.document = window.document;
      global.navigator = {
        userAgent: 'node.js',
      };
      copyProps(window, global);
    }
  };
};
