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