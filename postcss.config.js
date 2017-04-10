const postCSSConfig = ( webpack ) => ({
  plugins: [
    /* autoprefix for difference browser vendors */
    require('autoprefixer'),
    /* resolve imports inline */
    require('postcss-import')({
      addDependencyTo: webpack
    }),
    /* discard duplicate CSS rules */
    require('postcss-discard-duplicates')

    /* Need to add postcss-autoreset
     * after more investigation */
  ]
});

module.exports = postCSSConfig;
