// capture Elements

let counter = document.querySelector(".counter");
let alert = document.querySelector(".alert");
let sectionBtn = document.querySelector(".btns");

let btnIncrease = document.querySelector("#increase");
let btnDecrease = document.querySelector("#decrease");
let btnReset = document.querySelector("#reset");

// read data from localStorage

counter.textContent = localStorage.getItem("counter") || 0;

// increase operation

btnIncrease.addEventListener("click", increaseCounter);

function increaseCounter() {
  // clear alert message
  alert.textContent = "";

  if (counter.textContent == "10") {
    alert.textContent = "up limit reached";
    return;
  }

  counter.textContent = Number(counter.textContent) + 1;

  // save to localStorage

  localStorage.setItem("counter", counter.textContent);
}

// decrease operation

btnDecrease.addEventListener("click", decreaseCounter);

function decreaseCounter() {
  // clear alert message
  alert.textContent = "";

  if (counter.textContent == "0") {
    alert.textContent = "bottom limit reached";
    return;
  }

  counter.textContent = Number(counter.textContent) - 1;

  // save to localStorage

  localStorage.setItem("counter", counter.textContent);
}

// reset operation

btnReset.addEventListener("click", function () {
  // clear alert message
  alert.textContent = "";

  counter.textContent = "0";

  // save to localStorage
  localStorage.setItem("counter", "0");
});

/*

sectionBtn.addEventListener("click", counterOperation);

function counterOperation(e) {
  // increase
  if (e.target.id == "increase") {
    // clear alert message
    alert.textContent = "";

    if (counter.textContent == "10") {
      alert.textContent = "up limit reached";
      return;
    }

    counter.textContent = Number(counter.textContent) + 1;
    

  }

  // Decrease
  if (e.target.id == "decrease") {
    // clear alert message
    alert.textContent = "";

    if (counter.textContent == "0") {
      alert.textContent = "bottom limit reached";
      return;
    }

    counter.textContent = Number(counter.textContent) - 1;
  }

  // reset
  if (e.target.id == "reset") {
    // clear alert message
    alert.textContent = "";

    counter.textContent = "0";
  }
}

*/
