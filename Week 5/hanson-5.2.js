/*
============================================
; Title:  hanson-5.2.js
; Author: Drew Hanson
; Date:   10 January 2019
; Modified By:
; Description: Es5 Built-In Functions
;===========================================
*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 5.2"));

//start program
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

foods.forEach(function(food) {
    console.log(food);
});
