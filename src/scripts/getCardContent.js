import {getRandomCount, MILLISECONDS_IN_WEEK, getRandomBool} from "./config";

const TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`, `Написать в твиттер`, `Записать подкаст`, `Огранизовать нодскул`, `Прочитать книжку`];
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
const HASHTAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`, `nodeschool`, `space`, `twitter`, `podcast`, `book`];

const getCardContent = () => (
  {
    title: getTitle(),
    dueDate: Date.now() - getRandomCount(MILLISECONDS_IN_WEEK),
    hashtags: getHashtags(),
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

const getHashtags = () => {
  const arr = [];
  for (let i = 0; i < getRandomCount(HASHTAGS.length); i++) {
    arr.push(`#${getHashtag()}`);
  }
  return new Set(arr);
};

const getHashtag = () => HASHTAGS[getRandomCount(HASHTAGS.length)];

const getColor = () => COLORS[getRandomCount(COLORS.length)];

export default getCardContent;
