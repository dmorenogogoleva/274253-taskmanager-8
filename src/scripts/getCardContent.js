import {getRandomCount, MILLISECONDS_IN_WEEK} from "./config";

const TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`, `Написать в твиттер`, `Записать подкаст`, `Огранизовать нодскул`, `Прочитать книжку`];
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const getCardContent = () => (
  {
    title: getTitle(),
    dueDate: Date.now() - getRandomCount(MILLISECONDS_IN_WEEK),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: getColor(),
    repeatingDays: {
      Mo: getRandomBool(),
      Tu: getRandomBool(),
      We: getRandomBool(),
      Th: getRandomBool(),
      Fr: getRandomBool(),
      Sa: getRandomBool(),
      Su: getRandomBool(),
    },
    isFavorite: getRandomBool(),
    isDone: getRandomBool(),
  }
);


const getTitle = () => TITLES[getRandomCount(TITLES.length)];

const getColor = () => COLORS[getRandomCount(COLORS.length)];

const getRandomBool = () => Math.random() < 0.5;

export default getCardContent;
