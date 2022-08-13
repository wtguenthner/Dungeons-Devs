const user = document.querySelector('#user_name');
const charName = document.querySelector('#charName');




const username = sessionStorage.getItem("username");

const getData = async(event)=>{
    event.preventDefault();
     await fetch(`/api/users/${username}`, {
        method: "GET",
        // body: JSON.stringify({ username}),
        headers: { "Content-Type": "application/json" },
      }).then(response => response.json()
      ).then(async(data) => {
        const character_name = data[0].character_name;
        const user_id = data[0].user_id;
        await fetch(`/api/characters/${data[0].class_id}`,{
          method: "POST",
          body: JSON.stringify({character_name, user_id}),
          headers: { "Content-Type": "application/json" }
        })
    })
    }
   

    document
    .querySelector(".data-form")
    .addEventListener("submit", getData);

    