import { parsers as babelParsers } from 'prettier/parser-babel';
import { parsers as flowParsers } from 'prettier/parser-flow';
import { parsers as typescriptParsers } from 'prettier/parser-typescript';
import { parsers as htmlParsers } from 'prettier/parser-html';

import { defaultPreprocessor } from './preprocessors/default-processor';
import { vuePreprocessor } from './preprocessors/vue-preprocessor';

const options = {
    importOrder: {
        type: 'path',
        category: 'Global',
        array: true,
        default: [{ value: [] }],
        description: 'Provide an order to sort imports.',
    },
    importGroupOrder: {
        type: 'choice',
        choices: [
            {
                value: 'alphabetical',
                description: 'Default behavior and will output imports in alphabetical'
            },
            {
                value:     'length',
                description: 'Order based on length of import statement'
            },
            {
                value:     false,
                description: 'Order based on length of import statement'
            }
        ],
        category: 'Global',
        default: false,
        description: 'Provide a callback to decide how to order each import in a group either "length" or "alphabetically"'
    },
    importOrderCaseInsensitive: {
        type: 'boolean',
        category: 'Global',
        default: false,
        description: 'Provide a case sensitivity boolean flag',
    },
    importOrderParserPlugins: {
        type: 'path',
        category: 'Global',
        array: true,
        // By default, we add ts and jsx as parsers but if users define something
        // we take that option
        default: [{ value: ['typescript', 'jsx'] }],
        description: 'Provide a list of plugins for special syntax',
    },
    importOrderSeparation: {
        type: 'boolean',
        category: 'Global',
        default: false,
        description: 'Should imports be separated by new line?',
    },
    importOrderGroupNamespaceSpecifiers: {
        type: 'boolean',
        category: 'Global',
        default: false,
        description:
            'Should namespace specifiers be grouped at the top of their group?',
    },
    importOrderSortSpecifiers: {
        type: 'boolean',
        category: 'Global',
        default: false,
        description: 'Should specifiers be sorted?',
    },
};

module.exports = {
    parsers: {
        babel: {
            ...babelParsers.babel,
            preprocess: defaultPreprocessor,
        },
        flow: {
            ...flowParsers.flow,
            preprocess: defaultPreprocessor,
        },
        typescript: {
            ...typescriptParsers.typescript,
            preprocess: defaultPreprocessor,
        },
        vue: {
            ...htmlParsers.vue,
            preprocess: vuePreprocessor,
        },
    },
    options,
};
