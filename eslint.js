module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        'ecmaFeatures': {
            'modules': true
        }
    },
    extends: 'eslint:recommended',
    env: {
        'browser': true
    },
    rules: {
        'no-alert': 2,
        'semi': 2,
        'no-var': 2,
        'eqeqeq': 2,
        'quotes': [2, 'single'],
        'arrow-spacing': [1, {
            before: true,
            after: true
        }],
    },
    globals: {
        'Ember': true,
        'document': true,
        'window': true,
        '-Promise': true,
        'Promise': true,
        'module': true,
        'Cookies': true,
        'moment': true,
        'visit': true,
        'andThen': true,
        'find': true,
        'findWithAssert': true,
        'click': true,
        'triggerEvent': true,
        'wait': true,
        'ok': true,
        'equal': true,
        'notEqual': true,
        'deepEqual': true,
        'strictEqual': true,
        'throws': true,
        'exists': true,
        'renderProfiler': true,
        'expect': true,
        'test': true,
        'App': true,
        'currentURL': true
    }
};
