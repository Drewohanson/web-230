/*
============================================
; Title:  Hanson-2.4.js
; Author: Professor Krasso 
; Date:   06 December 2018
; Modified By: Drew Hanson
; Description: Creating functions with and
;              without parameters
;===========================================
*/

var header = require('../hanson-header.js');
console.log("\n")
console.log(header.display("Drew", "Hanson", "Week 2"));

//creation of function first name and last name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log("\n")
console.log("Hello my name is "+ fullName( "Drew", "Hanson") +"!")

//creating a new date string
function dateWriter(year, month, day) {
   date= new Date(year, month, day);
   return date.toLocaleDateString ("en");
}
//creating format number
function formatNumber(number, numOfFixedPositions) {
    return number.toFixed( numOfFixedPositions);
}
console.log("\n")
console.log("Today's date is " + dateWriter(2018, 7, 12) + " and the temperature is " + formatNumber(35.6578, 1) + " degrees.")

// funtion converting to interger
function convertToInt (string) {
    return parseInt (string);
}
// convert to float function 
function convertToFloat(string){
    return parseFloat (string);
}
console.log("\n")
console.log("I am " + convertToInt('34') + ' years old and my savings account goal is ' + convertToFloat('20657.43'))

// Test functions

// test for fullName
console.log('\n');
console.log(fullName('Sam','Allen'));
console.log(fullName('Billy','Bob'));
console.log(fullName('Joe','Somebody'));

//Test for dateWriter 
console.log("\n")
console.log(dateWriter(2010,12,25))
console.log(dateWriter(2014,2,19))
console.log(dateWriter(1984,10,24))


// Testing formatNumber */
console.log("\n")
console.log(formatNumber(726.56,1))
console.log(formatNumber(7894.579,2))
console.log(formatNumber(4897.5,3))