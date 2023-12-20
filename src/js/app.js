import GameSavingLoader from './GameSavingLoader.js';
import GameSavingLoaderAsync from './GameSavingLoaderAsync.js';


GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving)
  }, (error) => {
    console.log(error)
  });



(async () => {
  try {
    await GameSavingLoaderAsync.load()
  } catch (e) {
    console.log(e)
  }
})();
