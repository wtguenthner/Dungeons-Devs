import express from "express";
const router = express.Router();
import User from "../../models/User.js";
import Characters from '../../models/characters.js';
import isAuthenticated from './utils/helpers.js';

router.get("/:username", async (req, res) => {
  try {
     await User.findOne({where: {username: req.params.username}}).then((data) => res.json(data));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    character_name: req.body.character_name,
    class_id: req.body.class_id,
  })
    .then((data) => res.json(data))
    .then(
      req.session.save(() => {
        req.session.loggendIn = true;
      })
    );
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    } else {
      req.session.regenerate(function (err) {
        if (err) next(err)
    
        // store user information in session, typically a user id
        req.session.user = req.body.user_id;
        req.session.loggedIn = true;
    
        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err)
          res        
          .status(200)
          .json({ user: dbUserData, message: "You are now logged in!" })
          .redirect('/');
        })
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.get("/logout", (req, res, next) => {
  // When the user logs out, destroy the session
  // if (req.session.loggedIn) {
  //   req.session.destroy(() => {
  //     res.status(204).end();
  //   });
  // } else {
  //   res.status(404).end();
  // }
  req.session.user = null;
  req.session.loggedIn = false;
  req.session.save(function (err) {
    if (err) next(err)
    req.session.regenerate(function (err) {
      if (err) next(err)
      res.redirect('/');
    })
  })
});

export default router;
