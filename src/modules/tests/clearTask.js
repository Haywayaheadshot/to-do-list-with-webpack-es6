export default function clearItemsTest() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filteredTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}