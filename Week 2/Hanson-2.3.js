/*
============================================
; Title:  function-properties.js
; Author: Drew Hanson
; Date:   06 December 2018
; Description: Demonstrates how to define and call function properties
;===========================================
*/

// display header at beginning of program
const header = require('../Hanson-header.js');
console.log(header.display("Drew", "Hanson", "Week 2"));


function myName () {
    return myName.Drew;
}

// create a property for the function myName
myName.Drew = "Drew Hanson";

// display myName
console.log("\nHello " + myName() + "!");




