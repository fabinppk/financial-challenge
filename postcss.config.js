const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssGlobalImport = require('postcss-global-import');

module.exports = {
    plugins: [
        postcssPresetEnv({ stage: 0 }),
        postcssEasyImport(),
        postcssNested(),
        postcssMixins(),
        postcssGlobalImport()
    ]
};
