#!/usr/bin/env node
//input...
//12
//4.0
//is the best place to learn and practice coding!

//todo:write test case

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


// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "

// Declare second integer, double, and String variables.
  var one = 0;
  var two = 0.0;
  var three = '';

// Read and save an integer, double, and String to your variables.
  readLine();
  one = parseInt(input_stdin_array[ 0 ], 10);
  two = parseFloat(input_stdin_array[ 1 ]);
  three = input_stdin_array[ 2 ];

// Print the sum of both integer variables on a new line.
  process.stdout.write(one + i + '\n');

// Print the sum of the double variables on a new line.
  process.stdout.write((two + d).toFixed(1) + '\n');

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
  process.stdout.write(s + three + '\n');

}

