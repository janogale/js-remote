/* Conditional 

if 
if else
switch
ternory operator

*/

// Functions
// reusable.

// Don't Repeat Your Self - DRY

// function declaration

function greeting() {
  console.log("Hello Students.");
}

// function invokation - execution

greeting();

// change the color of h1 title to green
// declaring
function changeColor() {
  document.querySelector("h1").style.color = "#f00";
}

changeColor();

// Variable Scope.
// local Scope - inside function
// only function can access
// Global Scope  - outside of function
// global access

let year = 2020; // global scope

function message() {
  let course = "JavaScript"; // local scope

  console.log(`We are Learning ${course} in this year ${year}`);
  console.log("Year is " + year);
  console.log("Course is " + course);
}
message();

console.log("Year is " + year);
//console.log("Course is " + course);

// Function Parameters.

// code duplication.

// function welcomeVisitor1() {
//   console.log("welcome Cabdi");
// }

// function welcomeVisitor2() {
//   console.log("welcome Muuse");
// }

// function welcomeVisitor3() {
//   console.log("welcome Caasha");
// }

// welcomeVisitor1();
// welcomeVisitor2();
// welcomeVisitor3();

// declaration
function welcomeVisitor(salaan = "Welcome", name = "Guest") {
  console.log(salaan + " " + name);
}

// execution - envokation
welcomeVisitor();
welcomeVisitor("Galab Wacan", "Mustafe");
welcomeVisitor("Jimce Wacan", "Yusuf");
welcomeVisitor("Subax Wacan", "Nafisa");
welcomeVisitor("Aroorsuuban", "Ayaanle");
welcomeVisitor("Iska waran", "Mahamed");
welcomeVisitor("How are you ", "John");

// function add two numbers
// Default Value

function calculate(num1 = 0, num2 = 0) {
  console.log("Result is: " + (num1 + num2));
}

calculate(10, 30);

// output NaN
calculate();

console.log("------------------------");

// return value.
function calculate2(num1 = 0, num2 = 0) {
  let result = "Result is: " + (num1 + num2);

  return result;
}

let returnedValue = calculate2(3, 5);

console.log(returnedValue);

function calculateGrade(grade) {
  // return invalid data if data type is not a number

  if (typeof grade !== "number") {
    return "Please Type Number";
  }

  if (grade >= 90) {
    return "Grade A";
  } else if (grade > 80) {
    return "Grade B";
  } else if (grade > 70) {
    return "Grade C";
  } else {
    return "Grade is Low";
  }
}

console.log(calculateGrade(90));
console.log(calculateGrade("Hello"));
console.log(calculateGrade());
console.log(calculateGrade(65));
