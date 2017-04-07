const postCSSConfig = ( webpack ) => ({
  plugins: [
    /* autoprefix for difference browser vendors */
    require('autoprefixer'),
    // require('postcss-strip-inline-comments'),
    /* reset inherited rules */
    require('postcss-autoreset')({
      reset: {
        margin: 0,
        padding: 0,
        borderRadius: 0
      }
    })
  ]
});

module.exports = postCSSConfig;
