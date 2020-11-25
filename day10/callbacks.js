// functions - callbacks
// functionality dynamic.
// parameter data dynamic

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

let multiply = (n1, n2) => n1 * n2;

let result = calculate(2, 15, multiply);

let result2 = calculate(2, 5, function substruct(n1, n2) {
  return n1 - n2;
});

let power = calculate(2, 5, (n1, n2) => n1 ** n2);

// Array as Parameter.

var elements = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

function printArray(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    console.log(cb(arr[i]));
  }
}

//printArray(elements, function(item){ return item.toUpperCase()});

// push

function addItemToArray(arr = [], item) {
  arr[arr.length] = item;
}

addItemToArray(elements, "Muuse");
addItemToArray(elements, "Ayaanle");
addItemToArray(elements, "Mahamed");

//console.log(elements)

elements.map(function (item, index) {
  console.log(index + ": " + item);
});
