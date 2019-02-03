/*
============================================
; Title:  hanson-5.4.js
; Author: Drew Hanson
; Date:   12 January 2019
; Modified By:
; Description: 
;===========================================


var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 5.4"));

*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 5.3"));


// start program
var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        rating: 8
    },
    {
        firstName: "Wolfgang Anadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10

    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Classical",
        rating: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: 5
    }

];

composers.forEach(function(composer) {
    console.log(
        "Last Name" + "," + composer.lastName + "," + "Genre: " + composer.genre + " ," + "Rating: " + composer.rating)
})
//  Using map to filter composer array by rating

var compRating = composers.map(function(composer){
    return "Rating" + composer.rating + "\nLastName:" + composer.lastName;
});

// Using map to filter composer array by genre

var compGenre =composers.map(function(composer){
    return "Genre: "+ composer.genre + "\nLastName:"+ composer.lastName;
});

// end program
