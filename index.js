'use strict';

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'eol-last': [0],
        'no-mixed-requires': [0],
        'no-underscore-dangle': [0],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
        }],

        // Avoid using comma-dangle on function.
        // https://github.com/eslint/eslint/issues/7851#issuecomment-270428874
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],

        'no-alert': 'off',
        'no-console': 'off',

        // https://github.com/airbnb/javascript/issues/1071
        'no-mixed-operators': ['error', {
            allowSamePrecedence: true,
        }],

        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
            },
        }],
    },
};
