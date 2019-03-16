const getRandomCount = () => Math.floor(Math.random() * 10) + 1;

export const START_CARDS_COUNT = 7;

export const FILTER_TYPES = [
  {name: `all`, count: getRandomCount()},
  {name: `overdue`, count: getRandomCount()},
  {name: `today`, count: getRandomCount()},
  {name: `favorites`, count: getRandomCount()},
  {name: `repeating`, count: getRandomCount()},
  {name: `tags`, count: getRandomCount()},
  {name: `archive`, count: getRandomCount()}
];
