// capture input values

let nameInput = document.querySelector("#name");
let userInput = document.querySelector("#user");
let btn = document.querySelector("button");
let list = document.querySelector("#list");

// user data
let userList = JSON.parse(localStorage.getItem("usersList"));

let userData = [];

// if there is data in localstorage save to userData array
if (userList) {
  userData = userList;
}

for (let u of userData) {
  let li = document.createElement("li");

  li.innerHTML = u.name + " " + u.user;
  list.appendChild(li);
}

// button click

btn.addEventListener("click", addItem);

function addItem() {
  let name = nameInput.value;
  let user = userInput.value;

  // add input data to userData array
  userData.push({
    name: name,
    user: user,
  });

  list.innerHTML = "";

  for (let u of userData) {
    let li = document.createElement("li");

    li.innerHTML = u.name + " " + u.user;
    list.appendChild(li);
  }

  // save data to localStorage

  let stringData = JSON.stringify(userData);

  localStorage.setItem("usersList", stringData);

  //  empty input
  nameInput.value = "";
  userInput.value = "";
}
