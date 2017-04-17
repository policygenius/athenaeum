const autoprefixer = require('autoprefixer');
const postCSSImport = require('postcss-import');
const postCSSDiscardDupes = require('postcss-discard-duplicates');

const postCSSConfig = webpack => ({
  plugins: [
    /* autoprefix for difference browser vendors */
    autoprefixer,

    /* resolve imports inline */
    postCSSImport({
      addDependencyTo: webpack
    }),

    /* discard duplicate CSS rules */
    postCSSDiscardDupes

    /* Need to add postcss-autoreset
     * after more investigation */
  ]
});

module.exports = postCSSConfig;
