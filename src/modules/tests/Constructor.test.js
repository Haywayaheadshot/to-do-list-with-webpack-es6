import Task from '../Constructor.js';

describe('Task', () => {
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

// describe('clear Items', () => {
//   test('Should clear all completed items', () => {
//     // let storedObj = [];
//     const newTask1 = Task.addNewTask(1, 'test1', false);
//     const newTask2 = Task.addNewTask(2, 'test2', true);
//     const newTask3 = Task.addNewTask(3, 'test3', true);
//     // Task.clearCompletedTasks();
//     localStorageMock.setItem('taskTest', JSON.stringify(newTask1));
//     localStorageMock.setItem('taskTest', JSON.stringify(newTask2));
//     localStorageMock.setItem('taskTest', JSON.stringify(newTask3));
//     const storedObj = JSON.parse(localStorageMock.getWholeItem());
//     localStorageMock.clear();

//     expect(storedObj.completed).toBe(false);
//   });
// });

describe('Clear Items', () => {
  test('Should clear all completed items', () => {
    const newObject = {
      index: 1,
      description: 'test',
      completed: false,
    };
    // const newTask2 = Task.addNewTask(2, 'test2', true);
    // const newTask3 = Task.addNewTask(3, 'test3', true);
    Task.clearCompletedTasks(newObject);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});