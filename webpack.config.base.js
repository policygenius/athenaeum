process.traceDeprecation = true;

const path = require('path');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const postCSSConfig = require('./postcss.config.js');
const get = require('lodash/get');
const assign = require('lodash/assign');

const variant = process.env.CSS_VARIANT;

const baseDir = variant ? `tmp/${variant}` : 'src';

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'styleguide_assets'),
];

const isProd = process.env.NODE_ENV === 'production';

const cssModulesName = (modulesName) => {
  if (!isProd) {
    return 'rcl-[name]__[local]--[hash:base64:5]';
  }

  return `rcl_${modulesName || ''}_[local]-[hash:base64:3]`;
};

const baseRules = modulesName => [
  {
    test: /\.js$/,
    include: includePaths,
    use: [
      {
          // babel-loader will throw a deprecation warning
          // waiting for stable v7.0.0 to upgrade
        loader: 'babel-loader',
        options: {
          presets: [ 'env', 'react', 'stage-2' ]
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 3,
            localIdentName: cssModulesName(modulesName),
            sourceMap: !isProd,
            minimize: !!isProd
          }
        },
        {
          loader: 'postcss-loader?parser=postcss-scss',
          options: {
            postCSSConfig
          }
        },
        {
          loader: 'resolve-url-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProd,
            sourceComments: !isProd,
            includePaths: [ baseDir ],
            data: "@import 'assets/stylesheets/global';"
          }
        }
      ]
    })
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    include: includePaths,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
          publicPath: '/'
        }
      }
    ]
  },
  {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
          publicPath: '/'
        }
      }
    ]
  }
];

module.exports = (options) => {
  const rules = get(options, 'module.rules', []).concat(baseRules(options.modulesName));

  const plugins = get(options, 'plugins', []).concat([
    new ExtractTextPlugin({
      filename: variant ? `assets/${variant}_styles.css` : 'assets/styles.css',
      allChunks: true
    })
  ]);

  if (process.env.ANALYZE) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        reportFilename: `../webpack-bundle-report/report-${process.env.ANALYZE}${Date.now()}.html`,
        statsFilename: `../webpack-bundle-report/stats-${process.env.ANALYZE}${Date.now()}.json`,
        analyzerPort: 3000,
        production: true,
      })
    );
  }

  return {
    entry: options.entry,
    output: options.output,
    externals: options.externals,
    devtool: 'source-map',
    context: options.context || path.resolve(__dirname, baseDir),
    resolve: assign({
      modules: [
        path.resolve(__dirname, baseDir),
        'node_modules'
      ],
    }, options.resolve),
    module: {
      rules,
    },
    plugins
  };
};
