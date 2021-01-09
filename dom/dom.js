// entry point 
document.title = "Learning DOM"
// 
// let title = document.getElementById('title');

// let items = document.getElementsByClassName("item");

// let pars  = document.getElementsByTagName("p");

// more modern
// querySelector(css) single item
// and querySelectorAll(cc) collection of nodes;


let heading =  document.querySelector("h1#title");

heading.innerHTML = "Learning Javascript DOM";

let firstItem = document.querySelector("body ul li.item");
let items = document.querySelectorAll('.item');



firstItem.innerHTML = "<strong>Linux</strong>"


const list = document.querySelector(".items");


// content dom. 

//innerHTML, outerHTML, textContent. 
// value - input fields

const inputField = document.querySelector("#input");

inputField.value = "Please Enter password Address";


