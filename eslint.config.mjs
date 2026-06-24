import angularEslint from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
    eslintConfigPrettier,
    {
        ignores: ['**/node_modules/', '**/dist/'],
    },
    {
        files: ['**/*.ts'],
        extends: [...typescriptEslint.configs.recommended, ...angularEslint.configs.tsRecommended],
        processor: angularEslint.processInlineTemplates,
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@angular-eslint/component-class-suffix': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angularEslint.configs.templateRecommended, ...angularEslint.configs.templateAccessibility],
        rules: {},
    },
);
