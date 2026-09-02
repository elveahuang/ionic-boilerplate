/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-html', 'stylelint-config-recess-order'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'tailwind', 'layer', 'apply', 'use'],
            },
        ],
        'block-no-empty': null,
        'no-descending-specificity': null,
        'property-no-unknown': null,
        'selector-pseudo-class-no-unknown': null,
    },
};

export default config;
