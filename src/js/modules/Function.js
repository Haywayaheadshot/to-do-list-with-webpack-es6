// import {
//   toDoList, parser, input,
// } from './Variables.js';

// // import delete from images
// import deleteImage from './images/icons/delete.png';

// const addTask = (task) => {
//   const li = parser.parseFromString(`
//       <li class="to-do-list-item">
//           <input type="checkbox" class="checkbox" id="checkbox-${task.index}"
// ${task.completed ? 'checked' : ''}>
//           <label for="checkbox-${task.index}" class="checkbox-label">${task.description}</label>
//           <i class="fas fa-ellipsis-v"></i>
//       </li>
//       `, 'text/html').body.firstChild;
//   toDoList.appendChild(li);
// };

// const createTaskDynamically = () => {
//   const task = newTask.addNewTask(null, input.value, false);
//   const li = document.createElement('li');
//   li.classList.add('to-do-list-item');
//   toDoList.appendChild(li);
//   const checkBox = document.createElement('input');
//   checkBox.setAttribute('type', 'checkbox');
//   checkBox.setAttribute('class', 'checkbox');
//   checkBox.setAttribute('id', `checkbox-${task.index}`);
//   checkBox.setAttribute('unchecked', `${task.completed ? 'checked' : ''}`);
//   li.appendChild(checkBox);
//   const checkBoxLabel = document.createElement('label');
//   checkBoxLabel.setAttribute('for', `checkbox-${task.index}`);
//   checkBoxLabel.setAttribute('class', 'checkbox-label');
//   checkBoxLabel.innerHTML = task.description;
//   li.appendChild(checkBoxLabel);
//   const editButton = document.createElement('button');
//   editButton.setAttribute('class', 'edit-button');
//   editButton.setAttribute('type', 'button');
//   editButton.innerHTML = `<img class="edit-image" src='${editImage}' alt="Edit Button">`;
//   li.appendChild(editButton);
//   const deleteButton = document.createElement('button');
//   deleteButton.setAttribute('class', 'delete-button');
//   deleteButton.setAttribute('type', 'button');
//   deleteButton.innerHTML = `<img class="delete-image" src='${deleteImage}' alt="Delete Button">`;
//   li.appendChild(deleteButton);
//   input.value = '';
//   // get the list from local storage
//   localStorage.getItem('tasks');
// };

// export { addTask, createTaskDynamically };