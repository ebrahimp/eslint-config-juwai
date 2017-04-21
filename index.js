module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        "indent": ["error", 4],
        "max-len": ["error", {
            "code": 120,
            "ignoreComments": true
        }],

        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": true
            }
        }]
    }
};
