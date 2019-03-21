/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_getFilterButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/getFilterButton */ "./src/scripts/getFilterButton.js");
/* harmony import */ var _scripts_getCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/getCard */ "./src/scripts/getCard.js");
/* harmony import */ var _scripts_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/config */ "./src/scripts/config.js");



const filterContainer = document.querySelector(`.main__filter `);
const cardContainer = document.querySelector(`.board__tasks`);

const getFilterButtons = () => {
  const filterButtons = [];
  _scripts_config__WEBPACK_IMPORTED_MODULE_2__["FILTER_TYPES"].forEach(filter => {
    const button = Object(_scripts_getFilterButton__WEBPACK_IMPORTED_MODULE_0__["default"])(filter);
    filterButtons.push(button);
  });
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterButtons.join(``));
};

const getCards = (num = _scripts_config__WEBPACK_IMPORTED_MODULE_2__["START_CARDS_COUNT"]) => {
  const cards = [];

  for (let i = 0; i < num; i++) {
    cards.push(Object(_scripts_getCard__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  cardContainer.innerHTML = ``;
  cardContainer.insertAdjacentHTML(`beforeend`, cards.join(``));
};

filterContainer.addEventListener(`click`, evt => {
  if (evt.target.nodeName === `LABEL`) {
    const count = evt.target.querySelector(`[class$='count']`);
    getCards(+count.innerHTML);
  }
});
getFilterButtons();
getCards();
console.log('ololol');

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/*! exports provided: START_CARDS_COUNT, FILTER_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_CARDS_COUNT", function() { return START_CARDS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_TYPES", function() { return FILTER_TYPES; });
const getRandomCount = () => Math.floor(Math.random() * 10) + 1;

const START_CARDS_COUNT = 7;
const FILTER_TYPES = [{
  name: `all`,
  count: getRandomCount()
}, {
  name: `overdue`,
  count: getRandomCount()
}, {
  name: `today`,
  count: getRandomCount()
}, {
  name: `favorites`,
  count: getRandomCount()
}, {
  name: `repeating`,
  count: getRandomCount()
}, {
  name: `tags`,
  count: getRandomCount()
}, {
  name: `archive`,
  count: getRandomCount()
}];

/***/ }),

/***/ "./src/scripts/getCard.js":
/*!********************************!*\
  !*** ./src/scripts/getCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => `
  <article class="card">
    <form class="card__form" method="get">
    <div class="card__inner">
    <div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
    edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
    archive
    </button>
    <button
    type="button"
    class="card__btn card__btn--favorites card__btn--disabled"
    >
    favorites
    </button>
    </div>

    <div class="card__color-bar">
    <svg width="100%" height="10">
    <use xlink:href="#wave"></use>
    </svg>
    </div>

    <div class="card__textarea-wrap">
    <label>
    <textarea
    class="card__text"
    placeholder="Start typing your text here..."
    name="text"
    >
    This is example of new task, you can add picture, set date and time, add tags.</textarea
    >
    </label>
    </div>

    <div class="card__settings">
    <div class="card__details">
    <div class="card__dates">
    <button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">no</span>
    </button>

    <fieldset class="card__date-deadline" disabled>
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder="23 September"
          name="date"
        />
      </label>
      <label class="card__input-deadline-wrap">
        <input
          class="card__time"
          type="text"
          placeholder="11:15 PM"
          name="time"
        />
      </label>
    </fieldset>

    <button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">no</span>
    </button>

    <fieldset class="card__repeat-days" disabled>
      <div class="card__repeat-days-inner">
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-mo-1"
          name="repeat"
          value="mo"
        />
        <label class="card__repeat-day" for="repeat-mo-1"
          >mo</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-tu-1"
          name="repeat"
          value="tu"
          checked
        />
        <label class="card__repeat-day" for="repeat-tu-1"
          >tu</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-we-1"
          name="repeat"
          value="we"
        />
        <label class="card__repeat-day" for="repeat-we-1"
          >we</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-th-1"
          name="repeat"
          value="th"
        />
        <label class="card__repeat-day" for="repeat-th-1"
          >th</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-fr-1"
          name="repeat"
          value="fr"
          checked
        />
        <label class="card__repeat-day" for="repeat-fr-1"
          >fr</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          name="repeat"
          value="sa"
          id="repeat-sa-1"
        />
        <label class="card__repeat-day" for="repeat-sa-1"
          >sa</label
        >
        <input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-su-1"
          name="repeat"
          value="su"
          checked
        />
        <label class="card__repeat-day" for="repeat-su-1"
          >su</label
        >
      </div>
    </fieldset>
    </div>

    <div class="card__hashtag">
    <div class="card__hashtag-list"></div>

    <label>
      <input
        type="text"
        class="card__hashtag-input"
        name="hashtag-input"
        placeholder="Type new hashtag here"
      />
    </label>
    </div>
    </div>

    <label class="card__img-wrap card__img-wrap--empty">
    <input
    type="file"
    class="card__img-input visually-hidden"
    name="img"
    />
    <img
    src="img/add-photo.svg"
    alt="task picture"
    class="card__img"
    />
    </label>

    <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
    <input
      type="radio"
      id="color-black-1"
      class="card__color-input card__color-input--black visually-hidden"
      name="color"
      value="black"
      checked
    />
    <label
      for="color-black-1"
      class="card__color card__color--black"
      >black</label
    >
    <input
      type="radio"
      id="color-yellow-1"
      class="card__color-input card__color-input--yellow visually-hidden"
      name="color"
      value="yellow"
    />
    <label
      for="color-yellow-1"
      class="card__color card__color--yellow"
      >yellow</label
    >
    <input
      type="radio"
      id="color-blue-1"
      class="card__color-input card__color-input--blue visually-hidden"
      name="color"
      value="blue"
    />
    <label
      for="color-blue-1"
      class="card__color card__color--blue"
      >blue</label
    >
    <input
      type="radio"
      id="color-green-1"
      class="card__color-input card__color-input--green visually-hidden"
      name="color"
      value="green"
    />
    <label
      for="color-green-1"
      class="card__color card__color--green"
      >green</label
    >
    <input
      type="radio"
      id="color-pink-1"
      class="card__color-input card__color-input--pink visually-hidden"
      name="color"
      value="pink"
    />
    <label
      for="color-pink-1"
      class="card__color card__color--pink"
      >pink</label
    >
    </div>
    </div>
    </div>

    <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
    </div>
    </div>
    </form>
  </article>
  `);

/***/ }),

/***/ "./src/scripts/getFilterButton.js":
/*!****************************************!*\
  !*** ./src/scripts/getFilterButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (filter => `
<input
type="radio"
id="filter__${filter.name}"
class="filter__input visually-hidden"
name="filter"
checked
/>
<label for="filter__${filter.name}" class="filter__label">
${filter.name.toUpperCase()} <span class="filter__${filter.name}-count">
${filter.count}
</span></label>`);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map