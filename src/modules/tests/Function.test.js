import { deleteItem } from '../Function.js';

describe('deleteItem', () => {
  test('should delete a task', () => {
    const tasks = [
      {
        index: 1,
        description: 'test',
        completed: false,
      },
    ];
    const newTasks = deleteItem(tasks, 1);
    expect(newTasks).toEqual([]);
  });
});