module.exports = {
    extends: ['stylelint-config-html', 'stylelint-config-recess-order', 'stylelint-config-standard-scss'],
    customSyntax: 'postcss-html',
    overrides: [],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'tailwind', 'layer', 'apply'],
            },
        ],
        'block-no-empty': null,
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};
