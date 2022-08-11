

import user from '../../../models/User.js'

const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();
const character_name = document.querySelector("#character-name").value.trim();
const class_id = document.querySelector("#class-choice").value;

const createCharacter = async(username, password, character_name, class_id) =>{
if(username, password){
    const response = await fetch("/api/users/", {
  method: "POST",
  body: JSON.stringify({ username, password, character_name, class_id}),
  headers: { "Content-Type": "application/json" },
});
}
}




if ((password = "docker")) {
  alert("No Stanley");
} else {
  if (/\S/.test(username) && /\S/.test(password)) {
  } else {
    alert("Failed to sign up.");
  }
}

document
  .querySelector(".character-form")
  .addEventListener("submit", createCharacter);


