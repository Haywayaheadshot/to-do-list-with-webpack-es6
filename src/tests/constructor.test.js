/**
 * @jest-environment jsdom
 */

import Todo from '../modules/Todo.js';

describe('Add Todo', () => {
  test('should create a new Todo', () => {
    const obj = new Todo(1, 'test');
    obj.addTodo();
    expect(obj).toEqual({
      index: 1,
      description: 'test',
      completed: false,
    });
  });
});

describe('Remove Todo', () => {
  test('Adding TODO Four to local storage and deleting it', () => {
    const todo_1 = new Todo(1, 'Item One');
    todo_1.addTodo();
    const todo_2 = new Todo(2, 'Item Two');
    todo_2.addTodo();
    const delIndex = todo_1.index;
    todo_1.removeTodo(delIndex);

    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    function removeItem(desc) {
      return function (element) {
        return element.description === desc;
      };
    }
    const deletedItem = data.filter(removeItem(todo_1.description));
    expect(deletedItem).toEqual([]);
  });
});

describe('Remove Todo', () => {
  test('Adding one TODO Item to local storage and Editing it', () => {
    const obj = new Todo(1, 'Old value');
    obj.addTodo();
    const updateIndex = obj.index;
    obj.updateTodo(updateIndex, 'New Value');

    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    function updateElement(updateIndex) {
      return function (element) {
        return element.index === updateIndex;
      };
    }
    const getItem = data.filter(updateElement(updateIndex));
    expect(getItem[0].description).toBe('New Value');
  });
});

describe('Remove Todo', () => {
  test('add one item and update status to completed', () => {
    const obj = new Todo(1, 'Item Four');
    obj.addTodo();
    const target = obj.index;
    obj.markComplete(target, true);
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    function findElement(target) {
      return function (element) {
        return element.index === target;
      };
    }
    const getItem = data.filter(findElement(target));
    expect(getItem[0].completed).toBe(true);
  });
});

describe('Remove Todo', () => {
  test('Clear completed tasks already present in localStorage (2 of 5 items)', () => {
    const obj = new Todo(1, 'Item Six');
    obj.addTodo();
    const obj2 = new Todo(1, 'Item Six');
    obj2.addTodo();
    const obj3 = new Todo(1, 'Item Six');
    obj3.addTodo();
    const obj4 = new Todo(1, 'Item Six');
    obj4.addTodo();

    obj.markComplete(obj.index, true);
    obj2.markComplete(obj2.index, true);
    obj3.markComplete(obj3.index, true);
    obj4.markComplete(obj4.index, true);

    obj.deleteCompleted();

    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    expect(data).toEqual([]);
  });
});
