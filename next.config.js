const withPlugins = require('next-compose-plugins');
const path = require('path');

const images = require('next-images');

const webpackExtra = require('./webpack.extra');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfiguration = {
    /* eslint no-param-reassign:["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
    webpack: (config) => {
        config.plugins.push(
            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
            })
        );
        // config.module.rules.push({
        //     test: /\.module\.scss$/i,
        //     use: [
        //         'sass-loader',
        //         {
        //             loader: 'sass-resources-loader',
        //             options: {
        //                 resources: path.resolve(__dirname, 'src/styles/_variables.scss'),
        //             },
        //         },
        //     ],
        // });
        config.resolve.alias = {
            ...config.resolve.alias,
            ...webpackExtra.resolve.alias,
        };
        return config;
    },
};

module.exports = withPlugins([images], nextConfiguration);
