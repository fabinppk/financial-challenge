const path = require('path');

const webpackConfig = require('../webpack.extra');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(process.cwd())
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|jpg|png)/,
                use: ['file-loader']
            }
        ]
    },
    resolve: webpackConfig.resolve
};
