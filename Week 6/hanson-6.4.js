/*
============================================
; Title:  Hanson-6.4.js
; Author: Drew Hanson
; Date:   17 January 2019
; Modified By:
; Description: 
;===========================================

*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 6.4"));

//object nested
const ticketlog = {
    id: 105,
    name: "Bob Jones",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority: "medium",
person: {
    id: 105,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",
}
    
  };
  console.log("Ticket"+ " "+ ticketlog.id +" "+ "was created on " + ticketlog.dateCreated +" "+ "and assigned to employee"+" " + ticketlog.person.firstName +" "+ ticketlog.person.lastName+ " (" + ticketlog.person.jobTitle+ ").");
  

  
console.log("\n")
 
