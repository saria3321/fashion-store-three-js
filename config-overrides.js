const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.mjs$/,
    type: 'javascript/auto',
    use: [],
  }),
  (config) => {
    if (!config.ignoreWarnings) {
      config.ignoreWarnings = [];
    }

    config.ignoreWarnings.push((warning) => {
      if (warning.module && warning.module.resource) {
        return warning.module.resource.includes('@mediapipe/tasks-vision/vision_bundle.mjs');
      }
      return false;
    });

    return config;
  }
);
