console.log(sumNums(20, 5))


// 1 Function Declaration

function sumNums(num1, num2){
  console.log("function declaration")
  return num1 + num2
}

// 2 Function Expression.

let sumNums2 = function(num1, num2){
  return num1 + num2
}

console.log( sumNums2(2, 4) )




// 3 Arrow Functions  - function express.
    
     // no paramer
      
      let addNums = () => {
        console.log("Arrow Function")
        return 2 + 3;
      }
     
      console.log(addNums())
      
    // single parameter
      
      let capitalize = name => {
        
        if(name == undefined){
          
          return "Please Enter Name";
        }
     
         if(typeof name !== "string"){
          
          return "Please use String";
        }
        
       let firstCharacter = name[0].toUpperCase();
       let lastCharacters = name.slice(1).toLowerCase();
        
        return firstCharacter + lastCharacters
      }
          
      console.log( capitalize("MAXAMED") );

    // multiple parameters

   
     let power = (base, num)  => {
       
       return base ** num;
     }
     
     
     // single line body. optional. remove curly braces and return.
     let power2 = (base, num)  =>  base ** num;
     
     
     
     console.log(power(2,8))
     console.log(power2(2,10))











// parsing.  -- FD moved to top
// compiling
// execution