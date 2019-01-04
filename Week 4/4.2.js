/*
============================================
; Title:  hanson-4.2.js
; Author: Drew Hanson
; Date:   03 January 2019
; Modified By:
; Description: arrays
;===========================================
*/

var header = require('../hanson-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 4.2"));

  //start program
  var fruits =["Apple", "Orange", "Banana", "Mango", "Pear"];

  //function
  function getFruit(fruitname){
   for (var i=0; i<fruitname.length; i++) {

    console.log(fruitname[i]);
    }
}  

    //Output from getFruit() function
    getFruit(fruits);

    // end program



