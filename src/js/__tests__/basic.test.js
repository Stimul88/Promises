import GameSavingLoader from '../GameSavingLoader.js';


test('GameSavingLoader test', async () => {
  const gameSavingLoader = await GameSavingLoader.load().then((saving) => saving)
  const correct = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      level: 10,
      name: "Hitman",
      points: 2000}}
  expect(gameSavingLoader).toEqual(correct);
});
