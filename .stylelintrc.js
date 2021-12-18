module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'max-nesting-depth': 2,
    'selector-class-pattern':
      '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$', // Needed to check selectors for BEM.
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['FontAwesome'],
      },
    ],
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
  },
};
