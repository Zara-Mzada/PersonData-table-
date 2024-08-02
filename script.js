// HTML elements
let name_input = document.getElementById("name_input");
let lastname_input = document.getElementById("lastname_input");
let age_input = document.getElementById("age_input");
let email_input = document.getElementById("email_input");
let table_element = document.querySelector(".table");
let table_body = document.querySelector(".tbody");

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
  table_body.innerHTML = "";
  table_element.style.display = "table";
  for(let i=0; i<users.length; i++){
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    let td_lastname = document.createElement("td");
    let td_age = document.createElement("td");
    let td_email = document.createElement("td");
    let td_date = document.createElement("td");

    td_name.innerText = users[i].name;
    td_lastname.innerText = users[i].lastname;
    td_age.innerText = users[i].age;
    td_email.innerText = users[i].email;
    td_date.innerText = users[i].date

    tr.append(td_name, td_lastname, td_age, td_email, td_date);
    table_body.append(tr)
    table_element.append(table_body);
  }
}
