module.exports = {
  parserOptions : {
    ecmaFeatures : {
      jsx : true
    }
  },
  extends : [
    'xo-react/space'
  ],
  rules : {
    'react/destructuring-assignment' : 'off',
    'react/forbid-component-props'   : 'off',
    'react/no-danger'                : 'off',
    'react/no-string-refs'           : 'off',
    'react/no-unescaped-entities'    : 'off',
    'react/sort-comp'                : ['error', {
      order : [
        'static',
        'static-methods',
        'everything-else',
        'handler',
        'lifecycle',
        'rendering'
      ],
      groups : {
        static : [
          'styleguide',
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'defaultProps'
        ],
        handler : [
          '/^on.+$/'
        ],
        lifecycle : [
          'constructor',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        rendering : [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/jsx-closing-bracket-location' : ['error', {
      nonEmpty    : 'tag-aligned',
      selfClosing : 'tag-aligned'
    }],
    'react/jsx-handler-names' : ['error', {
      eventHandlerPrefix : 'on'
    }],
    'react/jsx-tag-spacing' : ['error', {
      closingSlash      : 'never',
      beforeSelfClosing : 'always',
      afterOpening      : 'never'
    }]
  }
};
