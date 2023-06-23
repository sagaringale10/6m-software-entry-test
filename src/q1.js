/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: 
    function swap(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
          return -1;
        }
      
        console.log("Before swapping: x =", x, "y =", y);
      
        x = x + y;
        y = x - y;
        x = x - y;
      
        console.log("After swapping: x =", x, "y =", y);
      }
      
// Task 2: 
// Invoking the swap function
swap(5, 10);
      
















