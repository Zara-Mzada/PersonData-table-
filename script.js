// HTML elements
let name_input = document.getElementById("name_input");
let lastname_input = document.getElementById("lastname_input");
let age_input = document.getElementById("age_input");
let email_input = document.getElementById("email_input");
let table_element = document.getElementsByTagName("table");

// Main array
let users = [];

// Functions

function getPersonData() {
  event.preventDefault();
  var obj = {
    name: name_input.value,
    lastname: lastname_input.value,
    age: age_input.value,
    email: email_input.value,
    date: new Date(),
  };
  users.push(obj);

  name_input.value = "";
  lastname_input.value = "";
  age_input.value = "";
  email_input.value = "";
}

function showPerson(){  
  const td_element = document.createElement("td");
  td_element.innerText = 'Salam'

  const tr_element = document.createElement("tr");

  const tbody = document.createElement("tbody");

  tr_element.append(td_element);
  table_element.appendChild(tr_element);
}
