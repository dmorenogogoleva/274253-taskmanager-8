import {FILTER_TYPES} from "./config";
import getFilterButton from './getFilterButton';

const filterContainer = document.querySelector(`.main__filter `);

const getFilterButtons = () => {
  const filterButtons = [];
  FILTER_TYPES.forEach((filter) => {
    const button = getFilterButton(filter);
    filterButtons.push(button);
  });
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterButtons.join(``));
};

// const getCards = (num = START_CARDS_COUNT) => {
//   const cards = [];
//   for (let i = 0; i < num; i++) {
//     const content = getCardContent();
//     cards.push(getCard(content));
//   }
//   cardContainer.innerHTML = ``;
//   cardContainer.insertAdjacentHTML(`beforeend`, cards.join(``));
// };

// filterContainer.addEventListener(`click`, (evt) => {
//   if (evt.target.nodeName === `LABEL`) {
//     const count = evt.target.querySelector(`[class$='count']`);
//     getCards(+count.innerHTML);
//   }
// });

export default getFilterButtons;
// getCards();
// getCardContent();
