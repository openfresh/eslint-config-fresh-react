module.exports = {
  plugins : [
    'jsx-a11y'
  ],
  extends : [
    'plugin:jsx-a11y/recommended'
  ],
  rules : {
    // Waiting for the ['nesting'] rule
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/51
    'jsx-a11y/label-has-for' : 'off'
  }
};
