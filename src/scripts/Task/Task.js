import getTask from "./getTask";
import {createElement} from '../helpers/createElement';

export default class Task {
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
    return getTask(this._data);
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  _isRepeated() {
    return Object.values(this._data.repeatingDays).some((it) => it === true);
  }

  _onEditButtonClick() {
    return !!this._onEdit && this._onEdit();
  }

  get element() {
    return this._element;
  }

  bind() {
    this._element.querySelector(`.card__btn--edit`).addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }


  unbind() {
    this._element.querySelector(`.card__btn--edit`).removeEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
