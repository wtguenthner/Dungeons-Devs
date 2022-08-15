    //direct to user profile
    //allow logout
    //direct to MeetTheDevs
    //start a game

    //user profile button document.location.replace("/profile.html");

    //logout button
        //remove session data for logged in user, setting logged in = false;
        //document.location.replace('/');

    //MTDs button document.location.replace('/meetthedevs.html');

    //start a game button reveal user characters to confirm desired fighter.
        //check if user.characters.length > 1
        //if not add fighter obj to session storage
        //more than 1 character than ... 
            //when fighter is selected reaveal a FIGHT! button.
                //add selected fighter obj to session storage
            //fight button document.location.replace('/battle.html');
