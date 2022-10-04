import './style.css';
// import refresh from imgages
import refreshImage from './images/icons/refresh.png';
// import enter from images
import enterImage from './images/icons/enter.png';

// import variables from variables.js
import {
  refresh, submit,
  enterButton, refreshButton,
} from './js/modules/Variables.js';

import addTask from './js/modules/Function.js';

refreshButton.src = refreshImage;
refreshButton.classList.add('refresh-img');
// Append refresh button to the DOM
refresh.appendChild(refreshButton);
enterButton.src = enterImage;
enterButton.classList.add('enter-img');
// Append enter button to the DOM
submit.appendChild(enterButton);

// Event listener for refresh button
refresh.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.reload();
});

// Array of to do list items
const toDoListItems = [{
  index: 0,
  description: 'HTML',
  completed: true,
},
{
  index: 1,
  description: 'CSS',
  completed: false,
},
{
  index: 2,
  description: 'Javascript',
  completed: true,
},
];

toDoListItems.forEach((task) => addTask(task));
