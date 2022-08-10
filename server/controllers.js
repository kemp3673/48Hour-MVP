const { Character, Monster } = require("../DB/db.js")

// Characters
exports.getCharacters = (req, res) => {
  return Character.find()
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}

exports.addCharacter = (req, res) => {
  return Character.create(req.body)
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}

exports.updateCharacter = (req, res) => {
  let filter = {character_name: req.body.character_name};
  let update = {current_hp: req.body.current_hp};
  return Character.findOneAndUpdate(filter, update)
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}

exports.deleteCharacter = (req, res) => {
  return Character.deleteOne({character_name: req.body.character_name})
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}

// Monsters
exports.getMonsters = (req, res) => {
  return Monster.find()
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}

exports.addMonsters = (req, res) => {
  return Monster.create(req.body)
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
}



