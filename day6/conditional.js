console.log("connected");

/*
let course = prompt("What are you learning?");

if (course == "javascript") {
  alert("woow you are learning amazing language");
  console.log("woow you are learning amazing language");
} else {
  alert("please learn JavaScript");
}

*/

// if statement - multi-condition.

// Grading

// 90 - 100 -> A Grade
// 80 - 89    -> B Grade
// 70 - 79     -> C Grade
// 60 - 69      -> D Grade
// rest         -> F failed

let grade = 100;

if (grade >= 90 && grade <= 100) {
  // nested condition
  if (grade > 95) {
    console.log("Grade A++");
  } else {
    console.log("Grade A");
  }
} else if (grade >= 80 && grade < 90) {
  console.log("Grade B");
} else if (grade >= 70 && grade <= 79) {
  console.log("Grade C");
} else if (grade >= 60 && grade <= 69) {
  console.log("Grade D");
} else if (grade < 60) {
  console.log("Failed Grade");
} else {
  console.log("Invalid Grade");
}

// ternary operator - ternary condtion

// condtion ? value1 : value2;

let hour = 12;

let greeting = hour < 12 ? "Subax Wanagsan" : "Maalin Wanagsan";

h2.textContent = greeting;

// ternary - example 2.

// welcome user
// name - visitor

let user = prompt("Welcome, what is your Name?");

// value string
// null

let visitor = user ? "Welcome " + user : "Welcome Guest";

h3.textContent = visitor;

// switch statement

switch ("test3") {
  case "test1":
    console.log("test 1");
    break;
  case "test2":
    console.log("test 2");
    break;
  default:
    console.log("no match");
}

var lang = "PHP";

switch (lang) {
  case "JS":
  case "Python":
  case "PHP":
    {
      console.log("Happy Coding");
    }
    break;
  case "network":
  case "ccna":
    console.log("Happy Network");
    break;
  default:
    console.log("Sorry, we dont teach " + lang + ".");
}
