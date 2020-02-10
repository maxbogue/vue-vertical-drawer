const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

const sassLoader = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass'),
  },
};

module.exports = {
  entry: './lib/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-vertical-drawer.js',
    library: 'VueVerticalDrawer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          silent: true,
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]_[hash:base64:5]',
                  },
                },
              },
              sassLoader,
            ],
          },
          {
            use: ['vue-style-loader', 'css-loader', sassLoader],
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src'),
    },
  },
  externals: nodeExternals(),
  devtool: 'source-map',
  performance: {
    hints: false,
  },
};
