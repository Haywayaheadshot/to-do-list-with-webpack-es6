import {
  newTask, input, toDoList,
} from './Variables.js';

// import delete from images
import deleteImage from '../images/icons/delete.png';
// import edit from images
import editImage from '../images/icons/edit.png';

const createTaskDynamically = () => {
  const task = newTask.addNewTask(null, input.value, false);
  const li = document.createElement('li');
  li.classList.add('to-do-list-item');
  toDoList.appendChild(li);
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('class', 'checkbox');
  checkBox.setAttribute('id', `checkbox-${task.index}`);
  checkBox.setAttribute('unchecked', `${task.completed ? 'checked' : ''}`);
  li.appendChild(checkBox);
  const checkBoxLabel = document.createElement('label');
  checkBoxLabel.setAttribute('for', `checkbox-${task.index}`);
  checkBoxLabel.setAttribute('class', 'checkbox-label');
  checkBoxLabel.innerHTML = task.description;
  li.appendChild(checkBoxLabel);
  const editButton = document.createElement('button');
  editButton.setAttribute('class', 'edit-button');
  editButton.setAttribute('type', 'button');
  editButton.innerHTML = `<img class="edit-image" src='${editImage}' alt="Edit Button">`;
  li.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete-button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = `<img class="delete-image" src='${deleteImage}' alt="Delete Button">`;
  li.appendChild(deleteButton);
  input.value = '';
  // get the list from local storage
  localStorage.getItem('tasks');
};

const displayTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks !== null) {
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('to-do-list-item');
      toDoList.appendChild(li);
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('class', 'checkbox');
      checkBox.setAttribute('id', `checkbox-${task.index}`);
      checkBox.setAttribute('value', `${task.completed ? 'checked' : ''}`);
      // checkBox.setAttribute('unchecked', `${task.completed ? 'checked' : ''}`);
      if (task.completed) {
        checkBox.setAttribute('checked', 'checked');
        checkBox.classList.add('completed');
      } else {
        checkBox.setAttribute('unchecked', 'unchecked');
      }
      li.appendChild(checkBox);
      const checkBoxLabel = document.createElement('label');
      checkBoxLabel.setAttribute('for', `checkbox-${task.index}`);
      checkBoxLabel.setAttribute('class', 'checkbox-label');
      checkBoxLabel.innerHTML = task.description;
      li.appendChild(checkBoxLabel);
      const editButton = document.createElement('button');
      editButton.setAttribute('class', 'edit-button');
      editButton.setAttribute('type', 'button');
      editButton.innerHTML = `<img class="edit-image" src='${editImage}' alt="Edit Button">`;
      li.appendChild(editButton);
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'delete-button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.innerHTML = `<img class="delete-image" src='${deleteImage}' alt="Delete Button">`;
      li.appendChild(deleteButton);
    });
  }
};

// module.exports = deleteItem;
export { displayTasks, createTaskDynamically };