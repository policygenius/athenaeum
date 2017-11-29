process.traceDeprecation = true;

const path = require('path');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
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

  return `${modulesName || 'rcl'}_[local]-[hash:base64:3]`;

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

  if (!options.entry || !options.entry.includes('main_nav')) {
    rules.push(
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          classPrefix: 'svg-class-[hash:8]-',
          idPrefix: 'svg-id-[hash:8]-',
          removeTags: true,
          removingTags: [ 'desc', 'defs', 'style' ],
          removeSVGTagAttrs: true,
          removingTagAttrs: [ 'xmlns', 'id', 'data-name', 'version', 'xlink', 'class' ]
        }
      }
    );
  }

  return {
    entry: options.entry,
    output: options.output,
    externals: options.externals,
    devtool: 'source-map',
    context: path.resolve(__dirname, baseDir),
    resolve: assign({
      modules: [
        path.resolve(__dirname, baseDir),
        'node_modules'
      ],
    }, options.resolve),
    module: {
      rules,
    },
    plugins: get(options, 'plugins', []).concat([
      new ExtractTextPlugin({
        filename: variant ? `assets/${variant}_styles.css` : 'assets/styles.css',
        allChunks: true
      })
    ])
  };
};
