#!/usr/bin/env node
/**
 * Strings and Loops
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

var String = function (chars) {
  this.chars = chars;
}

String.prototype.odd = function () {
  var r = '';
  for (var i=1; i < this.chars.length; i += 2) {
    r += this.chars[i];
  }
  return r;
}

String.prototype.even = function () {
  var r = '';
  for (var i=0; i < this.chars.length; i += 2) {
    r += this.chars[i];
  }
  return r;

}

function main() {
  var T = readLine();

  for(var i=0; i < T; i++) {
    var line = readLine();
    var s = new String( line);

    console.log(`${s.even()} ${s.odd()}`);
  }
}