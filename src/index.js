import './style.css';
// import refresh from imgages
import refreshImage from './images/icons/refresh.png';
// import enter from images
import enterImage from './images/icons/enter.png';

// import variables from variables.js
import {
  refresh, submit,
  enterButton, refreshButton, toDoList,
  clearCompletedButton, input, errorMessage, newTask,
} from './modules/Variables.js';

// import createTaskDynamically from Function.js
import { createTaskDynamically, displayTasks } from './modules/Function.js';

refreshButton.src = refreshImage;
refreshButton.alt = 'Refresh Button';
refreshButton.classList.add('refresh-img');
// Append refresh button to the DOM
refresh.appendChild(refreshButton);
enterButton.src = enterImage;
enterButton.classList.add('enter-img');
// Append enter button to the DOM
submit.appendChild(enterButton);

// event listener for enter button
submit.addEventListener('click', (event) => {
  event.preventDefault();
  if ((input.value !== '') || (event.key === 'Enter')) {
    createTaskDynamically();
    toDoList.style.display = 'block';
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
});

window.addEventListener('load', () => {
  displayTasks();
});

// event listener for clear completed button
clearCompletedButton.addEventListener('click', (event) => {
  event.preventDefault();
  // array.filter() method
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filteredTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  window.location.reload();
});

// event listener for delete button
toDoList.addEventListener('click', (event) => {
  if (event.target.className === 'delete-image') {
    newTask.deleteItem(event);
  }
  if (event.target.className === 'edit-image') {
    const editButton = event.target.parentElement;
    const editTask = editButton.previousElementSibling;
    const editTaskText = editTask.textContent;
    editTask.innerHTML = `
        <input type="text" class="edit-input" value="${editTaskText}" >
        `;
    const editInput = editTask.querySelector('.edit-input');
    // editInput.value = '';
    editInput.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter') && (editInput.value !== '')) {
        const editInput = editTask.querySelector('.edit-input');
        event.preventDefault();
        // update local storage
        const taskIndex = event.target.parentElement.parentElement.children[0].id;
        const taskIndexNumber = taskIndex.split('-')[1];
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[taskIndexNumber - 1].description = editInput.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
});

//  eventlistener for checkbox to mark task as completed and update local storage
toDoList.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    if (event.target.checked) {
      event.target.parentElement.classList.add('completed');
      // update local storage
      const taskIndex = event.target.id;
      const taskIndexNumber = taskIndex.split('-')[1];
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks[taskIndexNumber - 1].completed = true;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      event.target.parentElement.classList.remove('completed');
      // update local storage
      const taskIndex = event.target.id;
      const taskIndexNumber = taskIndex.split('-')[1];
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks[taskIndexNumber - 1].completed = false;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
});