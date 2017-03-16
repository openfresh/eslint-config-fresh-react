'use strict';

const validator = require('eslint/lib/config/config-validator');
validator.validate(require('./index'), 'index.js');
validator.validate(require('./jsx-a11y'), 'jsx-a11y.js');
