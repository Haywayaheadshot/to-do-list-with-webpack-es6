export default class Todo {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  getTodos() {
    let dataStored = [];
    let todos = [];
    if (localStorage.getItem('todos')) {
      dataStored = localStorage.getItem('todos');
      todos = JSON.parse(dataStored);
    }
    return todos;
  }

  addTodo() {
    let todos = this.getTodos();
    todos.push(this);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  removeTodo(index) {
    const toDos = this.getTodos();
    let data = toDos.filter(this.cleanData(index));
    let update = data.map(this.updateID(index));
    localStorage.setItem('todos', JSON.stringify(update));
  }

  cleanData(index) {
    return function (element) {
      return element.index != index;
    };
  }

  // function to update the rest of remaining elements ID after deleting one
  updateID(index) {
    return function (element) {
      if (element.index > index) {
        element.index -= 1;
      }
      return element;
    };
  }

  //function to update a todo task
  updateTodo(index, value) {
    const toDos = this.getTodos();
    let update = toDos.map(this.updateData(index, value));
    localStorage.setItem('todos', JSON.stringify(update));
  }

  // function to filter existing data from the one intended to be deleted
  updateData(index, value) {
    return function (element) {
      if (element.index == index) {
        element.description = value;
      }
      return element;
    };
  }

  // function to mark a todo as a complete
  markComplete(index, completed) {
    const toDos = this.getTodos();
    let update = toDos.map(this.updateStatus(index, completed));
    localStorage.setItem('todos', JSON.stringify(update));
  }

  // function to update the completed value of a TO-DO item based on it's index property value
  updateStatus(index, operation) {
    return function (element) {
      if (element.index == index) {
        element.completed = operation;
      }
      return element;
    };
  }

  deleteCompleted() {
    const toDos = this.getTodos();
    let update = toDos.filter( (element) => {
        if (element.completed == false) {
          return element;
        }
      });
    localStorage.setItem('todos', JSON.stringify(update));
  }
}
