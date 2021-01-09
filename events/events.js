// events - signals

// Event Handlers - Event Listeners.


//1 HTML attribute.
//<button onclick="">click me</button>
// not recommended

//2 DOM Element Property

let title = document.querySelector('h1')

title.onclick = function(){
    this.style.color ="red"
}


title.onmouseover = function(){
    this.innerHTML = "Mouse over me"
}

title.onmouseleave = function(){
    this.innerHTML = "Mouse left me"
}


//3 addEventListener.

let btn = document.querySelector('button');


btn.addEventListener("mouseover", function(){
    this.style.fontSize = "2rem";
});






// this keywork in events.
// the element which generated the event.


// Event Object.  {properties, methods}

btn.addEventListener("click", function(e){

    console.log()
    this.style.color ="red"
});