#!/usr/bin/env node
/**
 * Loops
 */

'use strict';

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;


module.exports.run = () => {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');

  process.stdin.on('data', function (data) {
    input_stdin += data;
  });

  process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
  });

}

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var n = parseInt(readLine());

  for (var i=1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);

  }
}
