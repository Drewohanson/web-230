/*
============================================
; Title:  hanson-5.3.js
; Author: Drew Hanson
; Date:   11 January 2019
; Modified By:
; Description: 
;===========================================
*/

var header = require('../hanson-header.js');

// Output of header.display  that accepts first name, last name, assignment name
console.log(header.display("Drew", "Hanson", "Exercise 5.3"));

/*
  Expected output:
  Drew Hanson
  Exercise 5.3
  1/11/2019
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/
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

// end program
