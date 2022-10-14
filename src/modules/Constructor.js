class Task {
  constructor(index, description, completed = null) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    // this.listArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  static addNewTask = (index = null, description = null, completed = null) => {
    if (description) {
      const newTaskIndex = index || this.listArray.length + 1;
      const isNewTaskCompleted = completed || false;
      const newTask = new Task(newTaskIndex, description, isNewTaskCompleted);
      // this.listArray.push(newTask);
      // localStorage.setItem('tasks', JSON.stringify(this.listArray));
      return newTask;
    }

    return null;
  };

  static updateTask = (index, description, completed) => {
    const task = this.listArray.find((task) => task.index === index);
    task.description = description;
    task.completed = completed;
    localStorage.setItem('tasks', JSON.stringify(this.listArray));
  }

  static deleteItem = (event) => {
    if (event.target === 'delete-button') {
      event.target.parentElement.parentElement.remove();
    }
    // remove task from local storage
    // const taskIndex = event.target.parentElement.parentElement.children[0].id;
    // const taskIndexNumber = taskIndex.split('-')[1];
    // const tasks = JSON.parse(localStorage.getItem('tasks'));
    // tasks.splice(taskIndexNumber - 1, 1);
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static clearCompletedTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filteredTasks = tasks.filter((task) => task.completed === false);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };
}

export default Task;

// module.exports = Task;