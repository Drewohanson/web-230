/*
============================================
; Title:  Hanson-6.1.js
; Author: Drew Hanson
; Date:   14 January 2019
; Modified By:
; Description: 
;===========================================


var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 6.1"));

*/
// object properties with errors

var txt = ""
var person = {fname:"John", lname:"Hancock", age:25}; 
var x
for (x in person) {
  txt += person[x] + " ";

