#!/usr/bin/env node
/**
 *  Array
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
  var arr = readLine().split(' ');
  arr = arr.map(Number);
  arr = arr.reverse();

  arr.forEach( (element) => { process.stdout.write( element + ' '); });
  console.log();

}