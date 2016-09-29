#!/usr/bin/env node

//todo: write test case

'use strict';

//day 0
function processData (inputString) {
  process.stdout.write('Hello, World.\n');
  process.stdout.write(inputString);

}

module.exports.run = function () {

  process.stdin.resume();
  process.stdin.setEncoding("ascii");

  var _input = '';
  process.stdin.on('data', function ( input) {
    _input += input;
  });

  process.stdin.on('end', function () {
    processData( _input);

  });
}
