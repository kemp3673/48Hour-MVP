require("dotenv").config();
const mongoose = require("mongoose");

const database = process.env.DB_NAME;

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
.then(console.log('MONGO CONNECTED'));

const characterSchema = new mongoose.Schema(
  {
    character_name: {type: String, required: true},
    player_name: {type: String, required: true},
    ac: Number,
    max_hp: Number,
    current_hp: Number,
    image: String
  }
);

const monsterSchema = new mongoose.Schema(
  {
    monster_name: {type: String, required: true},
    speed: {type: Number, required: true},
    ac: {type: Number, required: true},
    cr: {type: Number, required: true},
    max_hp: {type: Number, required: true},
    str: {type: Number, required: true},
    dex: {type: Number, required: true},
    con: {type: Number, required: true},
    int: {type: Number, required: true},
    wis: {type: Number, required: true},
    cha: {type: Number, required: true},
    info: {type: String, required: true},
    actions: {type: String, required: true},
    image: String
  }
);


const Character = new mongoose.model('Character', characterSchema);
const Monster = new mongoose.model('Monster', monsterSchema);

module.exports = { Character, Monster };
