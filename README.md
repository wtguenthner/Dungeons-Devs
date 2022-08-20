(./public/assets/img/DungeonsNDevs.png)

![GitHub license](https://img.shields.io/github/license/wtguenthner/Dungeons-Devs)

## Description:

Dungeons & Devs is a turn-based battle game designed as part of our coursework in the Georgia Tech Coding Boot Camp. As a group of gamers, we took inspiration from games like Magic the Gathering and Dungeons and Dragons to find a fun and challenging way to demonstrate our skills!

This app utilizes node.js, express.js, sequelize, Heroku, and JawsDB. Users can create an account, choose a character class, name their character, then battle a big bad boss! As students, this was our first time developing and deploying an app utilizing many of these technologies and a few challenges popped up along the way. We frequently had issues with the app running properly on a local host, but when deployed to Heroku, many features did not work! With a good dose of collaborative programming and troubleshooting, we managed to solve the issues we were having.

In the future, we would like to add the more features such as:

- Allowing users to have multiple characters they can select to use.
- Tracking a user's wins and losses.
- Leveling up characters and increasing their stats.
- Class creation, including uploading a class avatar and determining the stat distribution for their character.
- Additional bosses with varying levels of difficulty and play style.
- Class counters, such as dealing or receiving bonus dabamge from opposing classes.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Rules](#rules)
- [License](#license)
- [Questions and Contributing](#have-questions-or-want-to-contribute)

## Installation:

No installation required, just visit [Dungeons & Devs](https://dungeons-devs.herokuapp.com) to start playing!

## Usage:

In order to play, you must log in. If this is your first time, create an account and a character.  
(./public/assets/img/characterCreationExample.png)

Once you have created a character, you will be redirected to the main menu. Your character will be displayed and you can also meet the Devs! To play, select start a match.  
(./public/assets/img/menuExample.png)

## Rules:

- Each character has 3 base stats, attack, defense, and evasion.
- Player will begin with the first turn against the boss.
- Player must choose from 1 of the 3 stat cards before deciding whether to attack or defend.
- Each card will boost the requisite stat by the requisite amount for ONE turn. The difference between your attack stat and the boss's defense stat will be dealt to the boss's HP.
- After your turn, the boss will either attack you or defend against you.
- The battle ends when either your character or the boss reaches 0 HP.
- Can you defeat the Stanman!?

## License:

This app utilizes MIT License. For further information, please consult https://opensource.org/licenses/MIT.

## Have questions or want to contribute?

Visit our github profiles:
[Alexander Hacker](https://github.com/hackpres)
[Joshua Moran](https://github.com/joshmoran501)
[Maceo Maddox](https://github.com/MaceoMaddox)
[Sophia De La Rosa](https://github.com/sophiadelarosa)
[Taylor Guenthner](https://github.com/wtguenthner)

OR

Visit the [meet the devs page](https://dungeons-devs.herokuapp.com/meetdevs.html) for our contact info!
