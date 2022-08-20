const playerName = document.querySelector("#playerName");
const attack = document.querySelector("#playerAttackVal");
const defense = document.querySelector("#playerDefenseVal");
const evasion = document.querySelector("#playerEvasionVal");
const portrait = document.querySelector('#playerPortrait-container');
const profile = document.querySelector("#profile");
const startFight = document.querySelector("#startmatch");
const devs = document.querySelector("#devs");
const username = sessionStorage.getItem("username");
// const logout = document.getElementById('logout');

//user profile button document.location.replace("/profile.html");
profile.addEventListener("submit", () =>
  document.location.replace("/profile.html")
);

//logout button
//document.location.replace('/');
logout.addEventListener('click', async() => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
});

//MTDs button document.location.replace('/meetthedevs.html');
devs.addEventListener("submit", () =>
  document.location.replace("/meetdevs.html")
);

//start a game button document.location.replace('/battle.html');



const startMatch = () =>{
    document.location.replace("/battle.html")
}

document
.querySelector("#startmatch")
.addEventListener("submit", startMatch);

const getUserData = async () => {
  return await fetch(`/api/users/${username}`, {
      method: "GET",
      // body: JSON.stringify({ username}),
      headers: { "Content-Type": "application/json" },
  })
      .then((response) => response.json())
      .then((data) => {
          return data;
      });
};

const getCharacterData = async (user_id) => {
  return await fetch(`/api/characters/${user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
  })
      .then((response) => response.json())
      .then((data) => {
          // console.log(data);
          return data;
      });
};

const printCharcterData = async () => {
  const currentUserData = await getUserData();
  const currentCharacter = await getCharacterData(currentUserData.user_id);
  console.log(currentUserData);
  console.log(currentCharacter);
  playerName.innerText = currentUserData.character_name;
  attack.innerText = currentCharacter.attack;
  defense.innerText = currentCharacter.defense;
  evasion.innerText = currentCharacter.evasion;
  portrait.innerHTML = `<img id="playerPortrait" class="cardPortrait" src="${currentCharacter.class_avatar}" alt="player's character portrait">`
}
printCharcterData();