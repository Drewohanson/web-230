/*
============================================
; Title:  hanson-discussion-3.2.js
; Author: Professor Krasso 
; Date:   12 December 2018
; Modified By: Drew Hanson
; Description: Create a control statement
;               with two errors.
;===========================================
*/

// display header at beginning of program
const header = require('../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Week 3"));
console.log("");

var str = "bill";

		switch (str) 
		{
			case "steve":
				alert("This is Steve");
			case "bill":
				alert("This is Bill");
				break;
			case "john":
				alert("This is John");
				break;
			default:
				alert("Unknown Person");
				break;
        }
        