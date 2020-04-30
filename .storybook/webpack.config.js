const path = require('path');
const webpackConfig = require('../webpack.extra');

module.exports = ({ config }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        ...webpackConfig.resolve.alias,
    };
    config.module.rules.push(
        {
            test: /\.scss$/i,
            exclude: [/\.module\.scss$/i],
            sideEffects: false,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]',
                        },
                    },
                },
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(__dirname, '../src/styles/_variables.scss'),
                    },
                },
            ],
        },
        {
            test: /\.module\.scss$/i,
            sideEffects: false,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]__[hash:base64:5]',
                        },
                    },
                },
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        config: {
                            path: path.resolve(process.cwd()),
                        },
                        resources: path.resolve(__dirname, '../src/styles/_variables.scss'),
                    },
                },
            ],
        }
    );
    return config;
};
