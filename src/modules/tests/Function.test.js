//import createTaskDynamically from '../Function.js';
import Task from '../Constructor.js';
import { newTask } from '../Variables.js';

describe('Add testing', () => {
  test('Add checking with uncompleted task1', ()=>{
    const task1 = newTask.addNewTask(null, 'task1', false);
    const task2 = newTask.addNewTask(null, 'task2', false);
    expect(newTask.listArray.length).toBe(2);

  });

  test('Add checking with uncompleted task', ()=>{
    const task3 = newTask.addNewTask(null, 'task3', false);
    expect(newTask.listArray.length).toBe(3);
  });
  test('Add checking with completed task', ()=>{
    const task3 = newTask.addNewTask(null, 'task4', true);
    expect(newTask.listArray.length).toBe(4);
  });
  test('Add checking with empty string description', ()=>{
    const task3 = newTask.addNewTask(null, '', false);
    expect(newTask.listArray.length).toBe(4);
  }); 

});