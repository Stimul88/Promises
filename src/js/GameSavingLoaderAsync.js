import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoaderAsync {
  static load() {
    (async () => {
      try {
        const data = await read(); // возвращается Promise!
        const value = await json(data); // возвращается Promise!
        console.log(value)
      } catch(e) {
        console.log(e)
      }
    })();
  }
}