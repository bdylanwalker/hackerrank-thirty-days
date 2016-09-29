#!/usr/bin/env node

/*
* sample input
* 12.00
* 20
* 8
*/

'use strict';

function processData(input) {
  var input_stdin_array = input.split("\n");

  var mealCost = parseFloat( input_stdin_array[0]);
  var tipPercent = parseInt( input_stdin_array[1]);
  var taxPercent = parseInt( input_stdin_array[2]);

  var totalCost = mealCost + (mealCost * tipPercent / 100) + (mealCost * taxPercent / 100)

  process.stdout.write('The total meal cost is '+ Math.round( totalCost) +' dollars.\n')
}

module.exports.run = () => {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var _input = "";

  process.stdin.on("data", function (input) {
    _input += input;
  });

  process.stdin.on("end", function () {
    processData(_input);
  });
}