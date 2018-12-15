/*
============================================
; Title:  hanson-3.2.js
; Author: Drew Hanson
; Date:   13 December 2018
; Modified By:
; Description: Tests variables to see if they match
;===========================================
*/


var header = require('../hanson-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 3.2"));

//varibles
var testvar1 ="Truck";
var testvar2 ="Car";
var testvar3 ="Bike";
var testvar4 ="Bike";
var testvar5 ="Four";
var testvar6 ="Three";
//function
function match(arg1,arg2)
 {if (arg1 === arg2)
return true
else
 return false}

 function logMismatch(arg1, arg2) {
     console.log(arg1 +" " + "and" + " " + arg2 +" "+ "do not match!");
 }
 function logMatch(arg1, arg2) {
      console.log(arg1+ " "+"and"+ " " + arg2 +" "+ "do match!");
 }

 //output from the match() function...
 console.log(match("A", "B"));
 console.log(match(2, 2));


 // Conditional "if... else" statements. Include checks for all six (6) test veriables
 if (match(testvar1, testvar2)) {
     logMatch(testvar1, testvar2);
 } else {
       logMismatch(testvar1, testvar2);
 }
 if (match(testvar3, testvar4)) {
    logMatch(testvar3, testvar4);
} else {
      logMismatch(testvar3, testvar4);
}
if (match(testvar5, testvar6)) {
    logMatch(testvar5, testvar6);
} else {
      logMismatch(testvar5, testvar6);
}


  // end program