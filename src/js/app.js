import GameSavingLoader from './GameSavingLoader.js';
import read from "./reader.js";
import json from "./parser.js";
import GameSaving from "./GameSaving.js";

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving)
  }, (error) => {
    console.log(error)
  });

(async () => {
  try {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    const parsing = JSON.parse(value)
    const {id, created, userInfo} = parsing
    const obj = new GameSaving(id, created, userInfo)
    console.log(obj)
  } catch(e) {
    console.log(e)
  }
})();
