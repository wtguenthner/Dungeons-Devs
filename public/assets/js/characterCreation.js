

const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();
const character_name = document.querySelector("#character-name").value.trim();
const class_id = document.querySelector("#class-choice").value;

const getUserData = async () => {
  const username = document.querySelector("#username-signup").value.trim();

  return await fetch(`/api/users/${username}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.user_id;
    });
};

const createCharacterAPI = async (class_id, character_name, user_id) => {
  await fetch(`/api/characters/${class_id}`, {
    method: "POST",
    body: JSON.stringify({ character_name, user_id }),
    headers: { "Content-Type": "application/json" },
  });
};
const createCharacter = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const character_name = document.querySelector("#character-name").value.trim();
  const class_id = document.querySelector("#class-choice").value;

  if ((username, password)) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, password, character_name, class_id }),
      headers: { "Content-Type": "application/json" },
    });
  }

  sessionStorage.setItem("username", `${username}`);
  const userID = await getUserData();
  createCharacterAPI(class_id, character_name, userID);
  document.location.replace("/menu.html");
};

document
  .querySelector(".character-form")
  .addEventListener("submit", createCharacter);

const changeClassImg = () => {
  let img = document.getElementById("class-choice").value;
  const classImages = document.getElementById("classImages");
  if ((img = 1)) {
    classImages.style.backgroundImage = `url(../img/archer1.png)`;
  } else if ((img = 2)) {
    classImages.style.backgroundImage = url("../img/gunsligner.png");
  } else if ((img = 3)) {
    classImages.style.backgroundImage = `url(../img/mage1.png)`;
  } else if ((img = 4)) {
    classImages.style.backgroundImage = `url(../img/paladin1.png)`;
  } else if ((img = 5)) {
    classImages.style.backgroundImage = `url(../img/reaper1.png)`;
  } else if ((img = 6)) {
    classImages.style.backgroundImage = `url(../img/rogue1.png)`;
  }
};
