import getFilterButtons from "./scripts/getFilters";
import Task from './scripts/Task/Task';
import getTaskContent from "./scripts/getTaskContent";

const tasksContainer = document.querySelector(`.board__tasks`);

const taskComponent = new Task(getTaskContent());

tasksContainer.appendChild(taskComponent.render());

getFilterButtons();
