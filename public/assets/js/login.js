

const showLogin = (event) => {
  event.preventDefault();
  const userShow = document.querySelector("#user");
  const passwordShow = document.querySelector("#password");
  userShow.setAttribute("style", "display:flex");
  passwordShow.setAttribute("style", "display:flex");
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
  
      sessionStorage.setItem("username", `${username}`)
      document.location.replace("/menu.html");
      
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace(`/characterCreation.html`);
  
  
};

document
  .querySelector(".login-form")
  // .addEventListener("submit", loginFormHandler);
  .addEventListener("submit", showLogin);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
  