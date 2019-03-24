import getFilterButtons from "./scripts/getFilters";
import Task from './scripts/Task/Task';
import getTaskContent from "./scripts/getTaskContent";
import TaskEdit from "./scripts/TaskEdit/TaskEdit";

const tasksContainer = document.querySelector(`.board__tasks`);

const taskComponent = new Task(getTaskContent());
const taskEditComponent = new TaskEdit(getTaskContent());

tasksContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  taskEditComponent.render();
  tasksContainer.replaceChild(taskEditComponent.element, taskComponent.element);
  taskComponent.unrender();
};

taskEditComponent.onSubmit = () => {
  taskComponent.render();
  tasksContainer.replaceChild(taskComponent.element, taskEditComponent.element);
  taskEditComponent.unrender();
};

getFilterButtons();
