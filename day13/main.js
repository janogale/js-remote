// imports
import { sayHi, course } from "./file1.js";

// import and rename
import { MonthsOfYear, YEAR as CurrentYear } from "./date.js";
//import {format as formateDate} from './date-format.s'

// default import

import current from "./date.js";
console.log(current);

// import utility

// import { getElement, changeColor, capitalize } from "./utils.js";

// import all
import * as utils from "./utils.js";

// code

sayHi("Ahmed");

console.log(MonthsOfYear[1]);

//console.log(capitalize(course));
console.log(utils.capitalize(course));

// let h1 = getElement("h1");
// let h2 = getElement("h2");

// h1.style.color = "green";
// h2.style.color = "green";

// changeColor("h1", "green");
// changeColor("h2", "brown");
utils.changeColor("h1", "green");
utils.changeColor("h2", "brown");

let YEAR = 2020;

console.log(YEAR);
console.log(CurrentYear);
