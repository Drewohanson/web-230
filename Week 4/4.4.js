/*
============================================
; Title:  hanson-4.2.js
; Author: Drew Hanson
; Date:   04 January 2019
; Modified By:
; Description: arrays predicates
;===========================================
*/

var header = require('../hanson-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 4.4"));

  //start program
  var States =["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

  //function
 
  function getStates(Statesname){
   for (var i=0; i<Statesname.length; i++) {
    console.log(Statesname[i]);
    }
}  

//function
function getValue (States, val) {
    for (var k = 0; k < States.length; k++) {
        if (States[k] === val)
        console.log(States[k]);
    }
}
// Output for original array
console.log("\n -- ORIGINAL ARRAY --");
getStates(States);

// Output for sorted array
console.log("\n -- SORTED ARRAY --");
getStates(States.sort());

    //Output from getStates() function

    console.log("")

    console.log(" --Selected Value --");
    getValue(States, "Iowa");

    // end program