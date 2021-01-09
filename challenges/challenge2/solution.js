// 1 Create an index.html file and put four p elements with some text: Get the first paragraph by using document.querySelector(tagname)

let firstPar = document.querySelector("p:first-child");

//console.log(firstPar);

// 2 Get get each of the the paragraph using document.querySelector('#id') and by their id

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");

//console.log(p4);

// 3 Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

let allParagraphs = document.querySelectorAll("p");

//console.log(allParagraphs);

//4  Loop through the nodeList and get the text content of each paragraph

// .innerHTML or textContent

// for of loop
for (let p of allParagraphs) {
  // console.log(p.textContent);
}

// for loop

for (let i = 0; i < allParagraphs.length; i++) {
  //console.log(allParagraphs[i].textContent);
}

// forEach

allParagraphs.forEach(function (p) {
  //console.log(p.textContent)
});

// 5 Set a text content to paragraph the fourth paragraph,I am committed to Master JavaScript

allParagraphs[3].textContent = "I am committed to Master JavaScript";

// Set id and class attribute for all the paragraphs using different attribute setting methods

p1.id = "first-p"; // change id of paragraph 1

p3.className = "green";

p4.setAttribute("class", "green");

// change the background color of body to #663399 color

document.body.style.background = "#663399"; // background color
document.body.style.color = "#fff"; // font color

// Exercise: 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

allParagraphs[0].style.color = "red";
p2.style.fontSize = "1.2rem";
p2.style.border = "1px solid green";
p2.style.padding = "10px";

/* 
Exercise: 3
change the colors of li tags as indicated.
use the array colors to change the color of li tags
*/
let colors = [
  "#C2272D",
  "#F8931F",
  "#FFFF01",
  "#009245",
  "#0193D9",
  "#0C04ED",
  "#612F90",
];

let listItem = document.querySelectorAll("#list li");

// for of loop
let index = 0;

// for of  loop way
// for (let li of listItem) {

//   li.style.color = colors[index];

//   index++;
// }

// for loop

for (let i = 0; i < listItem.length; i++) {
  listItem[i].style.color = colors[i];
}

/*  Exercise: 4

Write a function that takes a string as argument
The string contains selectors that you can use to access elements on the current page
Find the first element that matches the selectors
Return the text content of the element
name the function as getElementText
*/

function getElementText(target) {
  let element = document.querySelector(target);

  if (element) return element.textContent;

  return "Element Does not exist";
}

console.log(getElementText("h1"));
