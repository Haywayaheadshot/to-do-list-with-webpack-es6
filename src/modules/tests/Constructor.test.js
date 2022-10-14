/* js-dom enviroment */

import Task from '../Constructor.js';

describe('Add Task', () => {
  test('should create a new task', () => {
    const newTask = Task.addNewTask(1, 'test', false);
    expect(newTask).toEqual({
      index: 1,
      description: 'test',
      completed: false,
    });
  });
});

describe('removing', () => {
  test('Should remove one element when is called', () => {
    const newTask1 = Task.addNewTask(1, 'test', false);
    const newTask2 = Task.addNewTask(2, 'test', false);
    Task.deleteItem(newTask2);
    expect(newTask1.index).toBe(1);
  });
});

describe('Clear Items', () => {
  test('Should clear all completed items', () => {
    const newTask1 = [
      {
        index: 1,
        description: 'test',
        completed: true,
      },
    ];
    const tasks = localStorage.setItem('tasks', JSON.stringify(newTask1));
    Task.clearCompletedTasks(tasks);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});