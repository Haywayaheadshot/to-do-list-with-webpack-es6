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
}

export default Task;

// module.exports = Task;