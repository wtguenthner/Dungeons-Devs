const profile = document.querySelector("#profile");
const startFight = document.querySelector("#startmatch");
const devs = document.querySelector("#devs");
const logout = document.getElementById('logout');

//user profile button document.location.replace("/profile.html");
profile.addEventListener("submit", () =>
  document.location.replace("/profile.html")
);

// logout button
// 
logout.addEventListener('submit', async () => {
  const response = await fetch("/api/users/logout", {
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