'use strict';

var writeFile = require('write');
var Metadata = require('metadata');
var metadata = new Metadata();
metadata.set('name', 'scaffold-tests');
metadata.set('description', 'Scaffold to add a tests to your project.');
metadata.set('repository', 'https://github.com/doowb/scaffold-tests');
metadata.set('homepage', 'https://github.com/doowb');
metadata.set('authors', [{author: 'Brian Woodward', homepage: 'https://github.com/doowb', email: 'brian.woodward@gmail.com'}]);
metadata.addTarget('tests', {src: 'test/*.js', dest: './tests'});

writeFile('manifest.json', JSON.stringify(metadata, null, 2));
