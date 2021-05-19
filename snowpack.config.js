/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', static: true },
  },
  plugins: [
    [
      'snowpack-plugin-minify-html',
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
          html5: true,
          collapseWhitespace: true,
        },
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
  },
};
