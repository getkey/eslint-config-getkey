/* eslint-env node */
'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const eslintrc = fs.readFileSync(path.join(__dirname, '.eslintrc.yml'));
module.exports = yaml.load(eslintrc);
