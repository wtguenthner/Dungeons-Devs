import express from "express";
const router = express.Router();
import Characters from "../../models/characters.js";
import Classes from "../../models/classes.js";
import User from "../../models/User.js";

router.get("/:id", async (req, res) => {
  try {
    await Classes.findByPk(req.params.id)
    .then((data) => res.json(data))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.post("/:id", async (req, res) => {
  try {
    await Classes.findByPk(req.params.id)

      .then(async (charData) => {
        console.log(charData);
        await Characters.create({
          class_id: charData.class_id,
          user_id: req.body.user_id,
          character_name: req.body.character_name,
          attack: charData.attack,
          defense: charData.defense,
          evasion: charData.evasion,
          health: charData.health,
        });
      })
      .then((data) => res.json(data));
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
