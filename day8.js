#!/usr/bin/env node
/**
 * Dictionaries and Maps
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
  var arr = [];
  var pb = new Map();
  var name = '';

  for (var i = 0; i < n; i++) {
    arr = readLine().split(' ');
    pb.set( arr[0], arr[1]);

  }

  for (var i = 0; i < n; i++) {
    name = readLine();

    //todo:figure out why this check was needed and remove the nested conditionals
    if ( null != name && name != '') {
      if ( pb.has( name)) {
        console.log(name + '=' + pb.get( name));
      } else {
        console.log('Not found');
      }

    }
  }

}