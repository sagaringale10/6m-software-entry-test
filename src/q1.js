/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/


    // Task 1: 
       def swap_values(x, y):
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        print("x and y must be numeric.")
        return -1

    x = x + y
    y = x - y
    x = x - y

    print("Swapped values: x =", x, "y =", y)
    return x, y



// Task 2: 
# Testing the function
x = 5
y = 10
swap_values(x, y)

module.exports = swap;
