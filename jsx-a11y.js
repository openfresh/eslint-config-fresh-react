module.exports = {
  plugins : [
    'jsx-a11y'
  ],
  extends : [
    'plugin:jsx-a11y/recommended'
  ],
  rules : {
    'jsx-a11y/label-has-for' : 'off' // [Deprecated on eslint-plugin-jsx-a11y v6.1.0]
  }
};
