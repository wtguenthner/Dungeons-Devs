const profile = document.getElementById('profile');
const startFight = document.getElementById('startmatch');
const devs = document.getElementById('devs');
const logout = document.getElementById('logout');

    //user profile button document.location.replace("/profile.html");
profile.addEventListener("click", () => document.location.replace('/profile.html'));

    //logout button
        //document.location.replace('/');
logout.addEventListener('click', () => await fetch("/api/users/logout"));

    //MTDs button document.location.replace('/meetthedevs.html');
devs.addEventListener('click', () => document.location.replace('/meetdevs.html'));

    //start a game button document.location.replace('/battle.html');
startFight.addEventListener('click', () => document.location.replace('/battle.html'));