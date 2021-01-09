// let title = document.querySelector('h1');
// console.log(title)

// Assignment.

/* 
1.	suppose your age is 25;
write code that asks the user what your age is and then responds according to the following guidelines:
	if number entered is 25, write alert that displays “Excellent you are Correct”.
	If number entered is less than 25, write code that displays “I am not that Young!”.
	If the number entered is greater than 25, write code that displays “NOO, I am younger than that”.
	If string is entered, write a code that asks the user to “Please Enter number”.
	If nothing is entered, write a code that asks the user “Please Guess My Age”
*/

function guessMyAge() {
  let age = prompt("Please Gues My Age?");

  // check if nothing is entered.

  if (age === null || age === "") return "Please Gues My Age";

  if (age < 0) return "please use positive number";

  // conver age type to number
  // age = +age;
  age = Number(age);

  if (age == 25) {
    return "You are Correct.";
  } else if (age < 25) {
    return "I am not that young.";
  } else if (age > 25) {
    return "I am not that too old";
  } else {
    return "Please Enter Number";
  }
}

//console.log(guessMyAge());

/* 
2.	Create a function that takes the age and return the age in days.
a.	Only accepts value that can be converted to number
b.	If input cannot be converted to num, inform the user.
c.	Year = 365 days.
*/

function convertAgeToDays(age) {
  // only accept number
  if (typeof age != "number") return "please use number";

  return age * 365;
}

//console.log(convertAgeToDays(23));

/* 
3.	Create a function that takes age as input and returns the birth year.
a.	Only accepts Number data type
b.	If input cannot be converted to num, inform the user.
*/

function getBirthYear(age) {
  let currentYear = new Date().getFullYear();

  // only accept number
  if (typeof age != "number") return "please use number";

  return currentYear - age;
}

// console.log(getBirthYear(25))

/* 
4.	Write a JavaScript function to hide bank account to protect from unauthorized user
a.	E.g. HRG-DB-12-44-1234
b.	Convert it to HRG-DB-12-44-****
*/

function hideAccount(acc) {
  return acc.slice(0, 10) + "******";
}

//console.log( hideAccount("HRG-DB-12-55-24324") )

/* 
5.	Create a function that calculates money exchange of dollar to shilling and shilling to dollar
a.	The function should take as input the amount and type of currency. 
b.	The function should return the correct exchange rate. 
c.	1 – 8500 rates   
*/

function convertCurrency(amount, type = "dollar") {
  // check type of amount
  if (typeof amount != "number") return "please use number";

  // only accept dollar and shilling
  if (type != "dollar" || type != "shilling")
    return "Only Shilling and dollar are supported";
  // convert shilling to dollar

  if (type == "shilling") {
    return amount / 8500;
  }

  // dollar to shilling

  return amount * 8500;
}

/* 
6.	Create a function that takes string as input and Capitalize first letter 
and changes remain small letters.
*/

function capitalize(str) {

    if(typeof str != 'string' || str == '') return 'please use string';

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//console.log( capitalize('javaSCRIPT'));
//console.log( capitalize(''));


/* 
7.	Create function that takes your first name and last name 
and  returns the first letter of names. 
*/


function getInitials(fName, lName){

    if(typeof fName != 'string' || fName == '') return 'please use string for First Name';
    if(typeof lName != 'string' || lName == '') return 'please use string for last Name';


    let initials = fName[0] + lName[0];
    return initials.toUpperCase();
}


//console.log( getInitials("mukhtar", "Mohamed") )
