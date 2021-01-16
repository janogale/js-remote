// Challenge 3 - Solution

const users = [
  {
    id: 1,
    name: "Ahmed Farah",
    username: "afarah",
    email: "afarah@gmail.com",
    address: {
      street: "Daruuraha",
      city: "Hargeisa",
    },
    phone: "3545435",
    website: "afarah.org",
    company: {
      name: "Telesom Company",
      slogan: "Reliable Service",
    },
  },
  {
    id: 2,
    name: "Warda Jama",
    username: "wjama",
    email: "wjama@gmail.com",
    address: {
      street: "new Hargeisa",
      city: "Hargeisa",
    },
    phone: "4534663",
    website: "wjama.net",
    company: {
      name: "daryeel hospital",
      slogan: "Proactive didactic contingency",
    },
  },
  {
    id: 3,
    name: "Mohamed Abdi",
    username: "mabdi",
    email: "mabdi@gmailcom",
    address: {
      street: "Pepsi Area",
      city: "Hargeisa",
    },
    phone: "35354345",
    website: "mabdi.info",
    company: {
      name: "Dahabshiil Company",
      slogan: "Fast Money Transfer",
    },
  },
  {
    id: 4,
    name: "Asma Yousuf",
    username: "ayousuf",
    email: "ayousuf@gmail.com",
    address: {
      street: "Jigjiga Yar",
      city: "Hargeisa",
    },
    phone: "4931709623",
    website: "ayousuf.com",
    company: {
      name: "WordRemit",
      slogan: "Online Money Transfer",
    },
  },
  {
    id: 5,
    name: "Khadra Mohamed",
    username: "kmohamed",
    email: "kmohamed@gmail.com",
    address: {
      street: "Calaamada",
      city: "Hargeisa",
    },
    phone: "2549541289",
    website: "kmohamed.info",
    company: {
      name: "Somcable",
      slogan: "Fiber-optic Internet",
    },
  },
  {
    id: 6,
    name: "Mahad Ibrahim",
    username: "mibrahim",
    email: "mibrahim@gmail.com",
    address: {
      street: "Idaacada",
      city: "Hargeisa",
    },
    phone: "477-935-8478",
    website: "mibrahim.org",
    company: {
      name: "Radio Hargeisa",
      slogan: "Synchronised bottom-line interface",
    },
  },
  {
    id: 7,
    name: "Kariima Hasan",
    username: "khasan",
    email: "khasan@hotmail.com",
    address: {
      street: "Isha Borama",
      city: "Hargeisa",
    },
    phone: "064376132",
    website: "khasan.io",
    company: {
      name: "Somtel Company",
      slogan: "Share Your World",
    },
  },
  {
    id: 8,
    name: "Raage Warsame",
    username: "rwarsame",
    email: "rwarsame@gmail.com",
    address: {
      street: "Shacabka",
      city: "Hargeisa",
    },
    phone: "4936943343",
    website: "rwarsame.com",
    company: {
      name: "SBI Group",
      slogan: "Somaliland Beverage Industry",
    },
  },
  {
    id: 9,
    name: "Deqa Rooble",
    username: "drooble",
    email: "drooble@gmail.com",
    address: {
      street: "Masalaha",
      city: "Hargeisa",
    },
    phone: "9679441206",
    website: "drooble.com",
    company: {
      name: "Hass Petrolium",
      slogan: "Serving New Frontiers",
    },
  },
  {
    id: 10,
    name: "Ali Daud",
    username: "adaud",
    email: "adaud@live.com",
    address: {
      street: "xero awr",
      city: "Hargeisa",
    },
    phone: "06483804",
    website: "adaud.net",
    company: {
      name: "DP World",
      slogan: "Creating the Future, Now",
    },
  },
];

// loop users data and display in page

const section = document.querySelector("#users");

// method one - hard way.

/*
for (let user of users) {
  // create new elements.
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let userElement = document.createElement("p");
  let emailElement = document.createElement("p");
  let companyElement = document.createElement("p");
  let phoneElement = document.createElement("p");
  let siteElement = document.createElement("p");
  let address1Element = document.createElement("p");
  let address2Element = document.createElement("p");

  // attach content to the new Elements
  h2.textContent = user.name;
  userElement.innerHTML = `username: <strong>${user.username}`;
  emailElement.innerHTML = `username: <strong>${user.email}`;
  companyElement.innerHTML = `username: <strong>${user.company.name}`;
  phoneElement.textContent = "Phone: " + user.phone;
  siteElement.textContent = `Website: ${user.website}`;
  address1Element.textContent = user.address.city;
  address2Element.textContent = user.address.street;

  // add class to the new div
  div.className = "card";

  div.appendChild(h2);
  div.appendChild(document.createElement("hr"));
  div.appendChild(userElement);
  div.appendChild(emailElement);
  div.appendChild(companyElement);
  div.appendChild(phoneElement);
  div.appendChild(siteElement);
  div.appendChild(address1Element);
  div.appendChild(address2Element);

  // add new Element to the page

  section.appendChild(div);
}

*/

// method 2 - the easy way.

for (let user of users) {
  // create card and add data to the page
  section.insertAdjacentHTML(
    "beforeend",
    `
    <div id="card-${user.id}" class="card">
    <h2>${user.name}</h2>
    <hr/>
    <p>Username: <strong>${user.username}</strong></p>
    <p>Email: <strong>${user.email}</strong></p>
    <p>Company: <strong>${user.company.name}</strong></p>
    <p>phone: <strong>${user.phone}</strong></p>
    <p>Website: <strong>${user.website}</strong></p>
    <br/>
    <address>
    ${user.address.city} <br/>
    ${user.address.street}
    </address>
    </div>
    `
  );
}

// method 3 - easy but not recommended.

// for (let user of users) {
//   // create card and add data to the page
//   section.innerHTML += `
//       <div id="card-${user.id}" class="card">
//       <h2>${user.name}</h2>
//       <hr/>
//       <p>Username: <strong>${user.username}</strong></p>
//       <p>Email: <strong>${user.email}</strong></p>
//       <p>Company: <strong>${user.company.name}</strong></p>
//       <p>phone: <strong>${user.phone}</strong></p>
//       <p>Website: <strong>${user.website}</strong></p>
//       <br/>
//       <address>
//       ${user.address.city} <br/>
//       ${user.address.street}
//       </address>
//       </div>
//       `;
// }

//  loop numbers 0 - 100 and display them in your page.

let numbersSection = document.querySelector("#numbers");

// find prime numbers

function isPrime(num) {
  if (num == 0 || num == 1) return false;

  for (let j = 1; j < num; j++) {
    if (j == 1) continue;
    if (num % j == 0) return false;
  }

  return true;
}

for (let i = 0; i <= 100; i++) {
  let div = document.createElement("div");

  // add green class to only even numbers
  if (i % 2 == 0) div.className = "green";
  // add red class to only odd numbers
  if (i % 2 != 0) div.className = "red";

  // add yellow class to only prime numbers
  if (isPrime(i)) div.className = "yellow";

  // add i value to div
  div.textContent = i;
  numbersSection.appendChild(div);
} // loop end
