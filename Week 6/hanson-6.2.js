/*
============================================
; Title:  Hanson-6.2.js
; Author: Drew Hanson
; Date:   15 January 2019
; Modified By:
; Description: 
;===========================================

*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 6.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/
// exception handling defined
try {

    var favoritecars = "Lamborghini, Countach";
  
    var myfavoritecars = "Lamborghini, Gallardo";
  
  if (favoritecars !== myfavoritecars) throw "NotmyFavoritecarException";
  
    console.log("Lambo Countach > Lambo Gallardo");
  
  } catch (err) {
  
    console.log("\nCatch clause: " + err);
  
  } finally {
  
    console.log("Finally clause reached...");
  
  };
