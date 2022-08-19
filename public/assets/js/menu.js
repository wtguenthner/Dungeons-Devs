

const profile = document.querySelector("#profile");
const startFight = document.querySelector("#startmatch");
const devs = document.querySelector("#devs");
// const logout = document.getElementById('logout');

//user profile button document.location.replace("/profile.html");
profile.addEventListener("submit", () =>
  document.location.replace("/profile.html")
);

//logout button
//document.location.replace('/');
// logout.addEventListener('submit', async() => await fetch("/api/users/logout"));

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