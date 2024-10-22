import { Linter } from 'eslint';

export const config: Linter.Config = {
    files: ['**/*.ts'],
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest'
        }
    },
    rules: {
        'no-unused-vars': 'warn',
        semi: ['error', 'always']
    }
};
