import read from "./reader.js";
import json from "./parser.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoaderAsync {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    const {id, created, userInfo} = JSON.parse(value)
    return new GameSaving(id, created, userInfo)
  }
}