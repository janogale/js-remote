// dom property

let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

h1.onclick = function (event) {

    console.log(event)

   // console.log(this)
  this.style.color = "brown";
  this.style.background = "green";
};



// addEventListener.

function changeBtn() {
    btn.style.fontSize = "2.5rem";
    btn.style.background = "#ccc";
  };

btn.addEventListener('mousemove', changeBtn)

btn.addEventListener("mouseleave", function () {
  btn.style.fontSize = "2rem";
  btn.style.background = "";
});

document.oncontextmenu = function (e) {
  e.preventDefault();
  document.body.style.visibility = "hidden";
  //alert("stop copying")
};



// cancel default behavior

let link = document.querySelector('div a');

link.addEventListener('click', function(event){
  event.preventDefault();

 //console.log( event.currentTarget  === this)

})




let section = document.getElementById('section');
let divTag = document.getElementById('div');
let pTag = document.getElementById('ptag');
let li1 = document.getElementById('li1');



section.addEventListener('click', function(event){

     console.log(event.target.nodeName)

     if(event.target.nodeName === 'LI'){

        if(event.target.style.backgroundColor == 'rgb(204, 204, 204)'){
            return event.target.style.background = '';
        }
         event.target.style.background = '#ccc';

         console.log(event.target.style.backgroundColor)
     }
  

    
    

     if(event.target.nodeName === 'UL'){
        event.target.style.background = '#090';
    }

    if(event.target.nodeName === 'P'){
        event.target.style.background = 'brown';
    }
    if(event.target.nodeName === 'H2'){
        event.target.style.background = 'red';
    }
})


// no neeed - we utalize event delegation

// divTag.addEventListener('click', function(event){

//     console.log("DIV tag event")
// })

// pTag.addEventListener('click', function(event){

//     console.log("P tag event")
// })

// li1.addEventListener('click', function(event){

//     this.style.background = "#ccc";
//      //event.stopPropagation();
//     console.log("li tag event")
// })