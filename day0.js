#!/usr/bin/env node


//todo: write test case

'use strict';

//day 0
function processData( inputString) {
  process.stdout.write( 'Hello, World.\n');
  process.stdout.write( inputString);

}

//process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on('readable', ( _input) => {
  processData( process.argv[2]);

});
