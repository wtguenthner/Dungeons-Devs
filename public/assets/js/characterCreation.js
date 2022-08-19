
const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();
const character_name = document.querySelector("#character-name").value.trim();
const class_id = document.querySelector("#class-choice").value;

const getUserData = async () =>{
  const username = document.querySelector("#username-signup").value.trim();
  
 return await fetch(`/api/users/${username}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) =>{
      console.log(data);
      return data.user_id;
    })
   
}

const createCharacterAPI = async (class_id, character_name, user_id) =>{
  await fetch(`/api/characters/${class_id}`, {
    method: "POST",
    body: JSON.stringify({ character_name, user_id }),
    headers: { "Content-Type": "application/json" },
  })

}
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


sessionStorage.setItem("username", `${username}`)
const userID =  await getUserData();
createCharacterAPI(class_id,character_name,userID);
document.location.replace("/menu.html");

}


  // if (/\S/.test(username) && /\S/.test(password)) {
  // } else {
  //   alert("Failed to sign up.");
  // }


document
  .querySelector(".character-form")
  .addEventListener("submit", createCharacter);


