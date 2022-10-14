import clearItemsTest from './clearTask.js';

describe('Clear Items', () => {
  test('Should clear all completed items', () => {
    const newObject = [
    //   {
    //    index: 1,
    //    description: 'test',
    //    completed: false,
    //   },
    ];

    const tasks = localStorage.setItem('tasks', JSON.stringify(newObject));
    clearItemsTest(tasks);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});