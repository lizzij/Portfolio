const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#000', '@border-color-base': '#000' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};