import Task from './Constructor.js';

export const submit = document.querySelector('.enter-button');
export const refresh = document.querySelector('.refresh-button');
export const toDoList = document.querySelector('.to-do-list-ul');
export const errorMessage = document.querySelector('#task-edit-error');
export const parser = new DOMParser();
// Declare enter button
export const enterButton = new Image();
// Declare refresh button
export const refreshButton = new Image();

//  Declare Clear all completed  button
export const clearCompletedButton = document.querySelector('.clear-completed');

// Declare input
export const input = document.querySelector('.task-input');

export const newTask = new Task();