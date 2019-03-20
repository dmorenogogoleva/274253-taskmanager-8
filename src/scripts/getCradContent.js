import {getRandomCount} from "./config";

const getCardContent = () => (
  {
    title: getTitle(),
    dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  }
);

const DEFAULT_TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`, `Написать в твиттер`, `Записать подкаст`, `Огранизовать нодскул`, `Прочитать книжку`];

const getTitle = () => DEFAULT_TITLES[getRandomCount(DEFAULT_TITLES.length)];

console.log(`getCardContent():`, getCardContent());

export default getCardContent;
