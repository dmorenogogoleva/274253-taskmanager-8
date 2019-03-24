import getTaskEdit from "./getTaskEdit";
import {createElement} from '../helpers/createElement';

export default class TaskEdit {
  constructor(data) {
    this._data = data;
    this._data.isRepeated = this._isRepeated();

    this._element = null;
    this._state = {
      // Состояние компонента
    };

    this._onEdit = null;
  }

  get template() {
    return getTaskEdit(this._data);
  }

  get element() {
    return this._element;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    return !!this._onSubmit && this._onSubmit();

  }

  _isRepeated() {
    return Object.values(this._data.repeatingDays).some((it) => it === true);
  }


  bind() {
    this._element.querySelector(`.card__btn--edit`).addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  bind() {
    this._element.querySelector(`.card__form`).addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

  unbind() {
    this._element.querySelector(`.card__form`).removeEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }
}
