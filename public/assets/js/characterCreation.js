



const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();
const character_name = document.querySelector("#character-name").value.trim();
const class_id = document.querySelector("#class-choice").value;

const createCharacter = async(event) =>{
  event.preventDefault();
  
const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();
const character_name = document.querySelector("#character-name").value.trim();
const class_id = document.querySelector("#class-choice").value;

if(username, password){
    const response = await fetch("/api/users/", {
  method: "POST",
  body: JSON.stringify({ username, password, character_name, class_id}),
  headers: { "Content-Type": "application/json" },
});
}
document.location.replace("/battle.html");
}


  // if (/\S/.test(username) && /\S/.test(password)) {
  // } else {
  //   alert("Failed to sign up.");
  // }


document
  .querySelector(".character-form")
  .addEventListener("submit", createCharacter);


