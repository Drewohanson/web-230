/*
============================================
; Title:  hanson-4.3.js
; Author: Drew Hanson
; Date:   04 January 2019
; Modified By:
; Description: filtering arrays
;===========================================
*/

var header = require('../hanson-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 4.3"));

/*
  Expected output:
  Drew Hanson
  Exercise 4.3
  1/04/2019
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

// start program
var vehicles =["Car","Truck", "Motorcycle", "Airplane", "Bus"];

//function
function getValue (vehicle, val) {
     for (var k = 0; k < vehicle.length; k++) {
         if (vehicle[k] === val)
         console.log(vehicle[k]);
     }
}

  //Output
  console.log("-- DISPLAYING ARRAY ITEMS --");
  for (var x = 0; x < vehicles.length; x++) {
      console.log(vehicles[x]);
  }

  //new line
  console.log("");

  console.log(" --Selected Value --");
  getValue(vehicles, "Motorcycle");

  console.log(" --Selected Value --");
  getValue(vehicles, "Bus");

  // end program