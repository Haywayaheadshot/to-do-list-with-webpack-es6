import './style.css';
// import refresh from imgages
import refreshImage from './images/icons/refresh.png';
// import enter from images
import enterImage from './images/icons/enter.png';

// import variables from variables.js
import {
  refresh, submit,
  enterButton, refreshButton, toDoList,
  clearCompletedButton, input, errorMessage,
} from './modules/Variables.js';

// import createTaskDynamically from Function.js
import createTaskDynamically from './modules/Function.js';

refreshButton.src = refreshImage;
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
    // remove task from local storage
    const taskIndex = event.target.parentElement.parentElement.children[0].id;
    const taskIndexNumber = taskIndex.split('-')[1];
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(taskIndexNumber - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
  if (event.target.type === 'checkbox') {
    // mark task as completed
    if (event.target.checked) {
      event.target.parentElement.classList.add('completed');
    } else {
      event.target.parentElement.classList.remove('completed');
    }
  }
});