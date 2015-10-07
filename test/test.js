/*!
 * scaffold-tests <https://github.com/doowb/scaffold-tests>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var scaffoldTests = require('./');

describe('scaffoldTests', function () {
  it('should:', function () {
    scaffoldTests('a').should.eql({a: 'b'});
    scaffoldTests('a').should.equal('a');
  });

  it('should throw an error:', function () {
    (function () {
      scaffoldTests();
    }).should.throw('scaffoldTests expects valid arguments');
  });
});
