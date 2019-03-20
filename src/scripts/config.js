export const getRandomCount = (max) => Math.floor(Math.random() * max);

export const START_CARDS_COUNT = 7;
const DEFAULT_MAX_COUNT = 10;

export const FILTER_TYPES = [
  {name: `all`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `overdue`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `today`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `favorites`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `repeating`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `tags`, count: getRandomCount(DEFAULT_MAX_COUNT)},
  {name: `archive`, count: getRandomCount(DEFAULT_MAX_COUNT)}
];

export const MILLISECONDS_IN_WEEK = 604800000;
