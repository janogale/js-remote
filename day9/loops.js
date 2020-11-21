// for loop
/*

for(let i = 0; i <= 10; i++) {
  
  console.log(i)
}





console.log("end")
*/
// print event number from 0 - 100
// 2 4 8 10
// 1 3 5 7 9

// While

/*
let counter = 10;

while(counter >= 0){
  
  console.log("Counter is " + counter);
  
  counter--;
}


console.log("BAAAAAAAAAAAM")


*/

// do while loop
// statement is executed before condition.

/*
let i = 0;

do {
 console.log("Do while Loop")
 i++;
}
while(i < 10);



let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


let lettersInCaps = [];




for(let i = 0; i < letters.length; i++){
  
 // lettersInCaps[i] = letters[i].toUpperCase();
  
  if( letters[i]  == "m"){
      break;
  }
  

  
  lettersInCaps.push( letters[i].toUpperCase() )
}



console.log(lettersInCaps)

*/

// skipping loop iteration

// let i = 0;

// while(i <= 20){

//    i++;

//   if(i == 5){  // skip
//     continue;
//   }

//   console.log(i)

// }

// even numbers  = number / 2   remainder 0
// odd numbers  = number / 2    remainder 1

let num = 0;

while (num < 100) {
  num++;
  // print even numbers only

  if (num % 2 == 0) continue;

  console.log(num);
}
