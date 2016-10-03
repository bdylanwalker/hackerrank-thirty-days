#!/usr/bin/env node
/**
 * Class vs Instance
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



var Person = function (initialAge){
  // Add some more code to run some checks on initialAge
  if ( initialAge > 0) {
    this.age = initialAge;

  } else {
    this.age = 0;
    console.log('Age is not valid, setting age to 0.');

  }


}

Person.prototype.amIOld = function() {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log('You are young.');

    } else if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager.');

    } else {
      console.log('You are old.');

    }


}

Person.prototype.yearPasses = function() {
    // Increment the age of the person in here
    ++this.age;

}


function main() {
  var i, j;
  var T=parseInt(readLine());
  for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }
}