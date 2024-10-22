module.exports = {
    rules: {
        'no-console': 'warn',
        quotes: ['error', 'single']
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parserOptions: {
                ecmaVersion: 'latest'
            },
            rules: {
                'no-unused-vars': 'warn',
                semi: ['error', 'always']
            }
        }
    ]
};
