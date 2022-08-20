import express from "express";
const router = express.Router();
import User from "../../models/User.js";
import Characters from "../../models/characters.js";
import passport from "passport";
router.get("/:username", async (req, res) => {
  try {
    await User.findOne({ where: { username: req.params.username } }).then(
      (data) => res.json(data)
    );
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
    passport.authenticate("local", {
      failureRedirect: "/",
      failureMessage: true,
    }),
      function (req, res) {
        res.redirect("/~" + req.user.username);
      };
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
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default router;
