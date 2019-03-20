import getFilterButton from './scripts/getFilterButton';
import getCard from './scripts/getCard';
import {FILTER_TYPES, START_CARDS_COUNT} from './scripts/config';

const filterContainer = document.querySelector(`.main__filter `);
const cardContainer = document.querySelector(`.board__tasks`);

const getFilterButtons = () => {
  const filterButtons = [];
  FILTER_TYPES.forEach((filter) => {
    const button = getFilterButton(filter);
    filterButtons.push(button);
  });
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterButtons.join(``));
};

const getCards = (num = START_CARDS_COUNT) => {
  const cards = [];
  for (let i = 0; i < num; i++) {
    cards.push(getCard());
  }
  cardContainer.innerHTML = ``;
  cardContainer.insertAdjacentHTML(`beforeend`, cards.join(``));
};

filterContainer.addEventListener(`click`, (evt) => {
  if (evt.target.nodeName === `LABEL`) {
    const count = evt.target.querySelector(`[class$='count']`);
    getCards(+count.innerHTML);
  }
});

getFilterButtons();
getCards();
