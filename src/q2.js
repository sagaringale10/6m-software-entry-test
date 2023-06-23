/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: // 
let patientNames = []; // Empty array to store patient names


    // Task 2: 
    // Adding patient names to the array
patientNames.push("John");
patientNames.push("Mary");
patientNames.push("Mark");

// Accessing patient names from the array
console.log(patientNames[0]); // Output: "John"
console.log(patientNames[1]); // Output: "Mary"
console.log(patientNames[2]); // Output: "Mark"

function addPatient(patientName){
      }
      
      
    

// Task 3: Add code here

let patientNames = ["John", "Mary", "Mark"]; // Array with patient names

function listPatient() {
  for (let i = 0; i < patientNames.length; i++) {
    console.log(patientNames[i]);
  }
}

// Calling the listPatient() function
listPatient();


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]