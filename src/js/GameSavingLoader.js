import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static load() {
    return read().then((response) => {
      return json(response);
    }).catch((error) => {
      return error;
    })
  }
}

