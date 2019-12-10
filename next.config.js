require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const images = require('next-images');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const webpackExtra = require('./webpack.extra');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfiguration = {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
    },
    /* eslint no-param-reassign:["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
    webpack: config => {
        config.plugins.push(
            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
            }),
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        );
        config.resolve.alias = {
            ...config.resolve.alias,
            ...webpackExtra.resolve.alias
        };
        return config;
    }
};

module.exports = withPlugins([css, images], nextConfiguration);
