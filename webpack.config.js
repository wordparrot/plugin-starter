/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

const getPublicPath = () => {
  const homePage = require(resolveApp('package.json')).homepage;

  if (process.env.NODE_ENV === 'development') {
    return '';
  } else if (process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL;
  } else if (homePage) {
    return homePage;
  }
  return '/';
};

const getEnvVariables = () => ({ PUBLIC_URL: getPublicPath(), VERSION: require(resolveApp('package.json')).version });

module.exports = function () {
  const isEnvProduction = process.env.NODE_ENV === 'production';

  const commonConfig = {
    entry: './src/index.ts',
    output: {
      filename: 'index.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'sandboxModule',
        type: 'var',
        export: 'default',
      },
    },
    plugins: [new NodePolyfillPlugin(), new webpack.ProgressPlugin(), new CleanWebpackPlugin()],

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          include: [resolveApp('src')],
          exclude: [/node_modules/],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },

    target: 'node',

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname),
      },
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
      },
    },
  };

  if (isEnvProduction) return merge(commonConfig, prodConfig);
  else return merge(commonConfig, devConfig);
};
