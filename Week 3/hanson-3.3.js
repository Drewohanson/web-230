/*
  Expected output:
  Drew Hanson
  Exercise 3.3
  12/14/2018
  // Expected output
  The enter key was pressed
*/

// multiway branch  of if statements (replace with a switch statement)
var eventKeyCode =13;


switch (eventKeyCode) {
    case 13:
       console.log ("The enter key was pressed");
       break;
    case 16:
      console.log ("The shift key was pressed");
       break;
       case 32:
       console.log ("The spacebar key was pressed");
       break;
       case 8:
        console.log ("The backspace / delete key was pressed");
        break;
        default:
        console.log ("unrecognized key press");
        break;

}