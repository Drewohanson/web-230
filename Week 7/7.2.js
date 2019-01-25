/*
============================================
; Title:  Hanson-7.2.js
; Author: Drew Hanson
; Date:   23 January 2019
; Modified By:
; Description: 
;===========================================

*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 7.2"));  

// object
const employee = {
    id: '123456',
    firstName: 'Thomas',
    lastName: 'Edison',
    title: 'Software Engineer'
  };
  
  // output
  console.log(' -- DISPLAYING THE employee name --') 
  console.log(employee.id);
  console.log(employee.firstName); 
  console.log(employee.lastName); 
  console.log(employee.title);
  console.log(""); // new line
  
  function Employee(firstName,  title) {
    
    this.firstName = firstName;
   
    this.title = title;
    
  }
  
  // create new objects
  const employees = [
    new Employee('Thomas Edison','software engineer' ),
    new Employee('Benjamin Franklin','programer' ),
    new Employee( 'Nikola Telsa','project manager'),
    new Employee( 'Alexander Bell','audio/visual production'),
    new Employee( 'Charles Babbage','product manager' )
  ];
  
  // output
  console.log('-- DISPLAYING A LIST OF top employees --')
  let index = 1
  for (let x = 0; x < employees.length; x++) {
    console.log(index + ''+' '+employees[x].firstName+' ,'+' ' + employees[x].title)
    index++
  }