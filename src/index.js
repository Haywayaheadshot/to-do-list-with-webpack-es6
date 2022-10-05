import './style.css';
// import refresh from imgages
import refreshImage from './images/icons/refresh.png';
// import enter from images
import enterImage from './images/icons/enter.png';
// import delete from images
import deleteImage from './images/icons/delete.png';
// import edit from images
import editImage from './images/icons/edit.png';

// import variables from variables.js
import {
  refresh, submit,
  enterButton, refreshButton, toDoList,
  clearCompletedButton, input, errorMessage,
} from './js/modules/Variables.js';

refreshButton.src = refreshImage;
refreshButton.classList.add('refresh-img');
// Append refresh button to the DOM
refresh.appendChild(refreshButton);
enterButton.src = enterImage;
enterButton.classList.add('enter-img');
// Append enter button to the DOM
submit.appendChild(enterButton);

// Class for task
class Task {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    toDoList.style.display = 'block';
    // get the list from local storage
    this.listArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  addNewTask = (index = null, description = null, completed = null) => {
    if (description) {
      const newTaskIndex = index || this.listArray.length + 1;
      const isNewTaskCompleted = completed || false;
      const newTask = new Task(newTaskIndex, description, isNewTaskCompleted);
      this.listArray.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.listArray));
      return newTask;
    }

    return null;
  };
}

const newTask = new Task();

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

document.addEventListener('DOMContentLoaded', createTaskDynamically.displayTasks);

// event listener for enter button
submit.addEventListener('click', (event) => {
  event.preventDefault();
  if ((input.value !== '') || (event.key === 'Enter')) {
    createTaskDynamically();
  } else if (input.value === '') {
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 1500);
  }
});

// Event listener for refresh button
refresh.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.reload();
  toDoList.style.display = 'block';
  // get the list from local storage
  localStorage.getItem('tasks');
});

// event listener for clear completed button
clearCompletedButton.addEventListener('click', (event) => {
  event.preventDefault();
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    task.remove();
  });
});

// event listener for delete button
toDoList.addEventListener('click', (event) => {
  if (event.target.className === 'delete-image') {
    // remove task from the DOM
    event.target.parentElement.parentElement.remove();
  }
  if (event.target.className === 'edit-image') {
    const editButton = event.target.parentElement;
    const editTask = editButton.previousElementSibling;
    const editTaskText = editTask.textContent;
    editTask.innerHTML = `
        <input type="text" class="edit-input" value="${editTaskText}" >
        `;
    const editInput = editTask.querySelector('.edit-input');
    editInput.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter') && (editInput.value !== '')) {
        event.preventDefault();
        editTask.innerHTML = editInput.value;
      } else if ((event.key === 'Enter') && (editInput.value === '')) {
        // show error message
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 3000);
      }
    });
  }
  if (event.target.type === 'checkbox') {
    // mark task as completed
    if (event.target.checked) {
      event.target.parentElement.classList.add('completed');
    } else {
      event.target.parentElement.classList.remove('completed');
    }
  }
});