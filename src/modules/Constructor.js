export default class Task {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  addNewTask = () => {
    let dataStored = [];
    let todos = [];
    if (localStorage.getItem('tasks')) {
      dataStored = localStorage.getItem('tasks');
      todos = JSON.parse(dataStored);
    }
    localStorage.setItem('tasks', JSON.stringify(this.listArray));
  };

  updateTask = (index, description, completed) => {
    const task = this.listArray.find((task) => task.index === index);
    task.description = description;
    task.completed = completed;
    localStorage.setItem('tasks', JSON.stringify(this.listArray));
  };
}
