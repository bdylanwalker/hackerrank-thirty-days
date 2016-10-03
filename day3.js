#!/usr/bin/env node

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

/////////////// ignore above this line ////////////////////

function main() {
  var N = parseInt(readLine());

  // If N is odd, print Weird
  if (N % 2 > 0) {
    process.stdout.write('Weird\n');

  }

  // If N is even and in the inclusive range of 2 to 5, print Not Weird
  if (N % 2 == 0 && N >= 2 && N <= 5) {
    process.stdout.write('Not Weird\n');

  }

  // If N is even and in the inclusive range of 6 to 20, print Weird
  if (N % 2 == 0 && N >= 6 && N <= 20) {
    process.stdout.write('Weird\n');

  }

  // If N is even and greater than 20, print Not Weird
  if (N % 2 == 0 && N > 20) {
    process.stdout.write('Not Weird\n');

  }

}
