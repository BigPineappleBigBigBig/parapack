module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    extends: [
        'plugin:vue/strongly-recommended',
        // 'airbnb-base',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        // 'import/extensions': false,

        // 4 行空格缩进
        'vue/html-indent': ["error", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'indent': [
            'warn',
            4,
            {
                "SwitchCase": 1,
                "ignoredNodes": ["TemplateLiteral"]
                //https://github.com/babel/babel-eslint/issues/681
            }
        ],
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'global-require': 'off',
        'semi': ['warn', 'always'],
        "no-multiple-empty-lines": [1, {"max": 1}],
        'no-empty': 'warn',
        'comma-dangle': ['error', 'only-multiline'],
        "max-len": ["error", { "code": 300 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/return-in-computed-property': 'off',
        'vue/prop-name-casing': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
    }
};
