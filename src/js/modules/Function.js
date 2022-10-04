import {
  toDoList, parser,
} from './Variables.js';

const addTask = (task) => {
  const li = parser.parseFromString(`
      <li class="to-do-list-item">
          <input type="checkbox" class="checkbox" id="checkbox-${task.index}" ${task.completed ? 'checked' : ''}>
          <label for="checkbox-${task.index}" class="checkbox-label">${task.description}</label>
          <i class="fas fa-ellipsis-v"></i>
      </li>
      `, 'text/html').body.firstChild;
  toDoList.appendChild(li);
};

export default addTask;