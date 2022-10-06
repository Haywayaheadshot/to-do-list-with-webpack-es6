class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    this.listArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  addNewTask = (index = null, description = null, completed = null) => {
    if (description) {
      const newTaskIndex = index || this.listArray.length + 1;
      const isNewTaskCompleted = completed || false;
      const newTask = new Task(newTaskIndex, description, isNewTaskCompleted);
      this.listArray.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.listArray));
      return newTask;
    }

    return null;
  };
}

export default Task;