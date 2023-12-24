import GameSavingLoader from './GameSavingLoader.js';
import GameSavingLoaderAsync from "./GameSavingLoaderAsync.js";

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving)
  }, (error) => {
    console.log(error)
  });


(async () => {
  try {
    const data = await GameSavingLoaderAsync.load();
    console.log(data)
  } catch(e) {
    console.log(e)
  }
})();
