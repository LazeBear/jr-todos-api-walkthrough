/**
 * {
 *    "id": number
 *    "description": string,
 *    "done": boolean
 * }
 */
const tasks = [];
let id = 1;

function addTask({ description }) {
  const task = { description, id: id++, done: false };
  tasks.push(task);
  return task;
}

function getAllTask({ description }) {
  if (description) {
    const filtered = tasks.filter((i) => i.description.includes(description));
    return filtered;
  }
  return tasks;
  // return JSON.parse(JSON.stringify(tasks));
}

function getTaskById(id) {
  return tasks.find((i) => i.id === id);
}

function updateTaskById(id, { done, description }) {
  const task = getTaskById(id);
  if (done !== undefined) {
    task.done = !!done;
  }
  if (description) {
    task.description = description;
  }
  return task;
}

function deleteTaskById(id) {
  const taskIndex = getTaskIndexById(id);
  tasks.splice(taskIndex, 1);
  // const deletedTask = tasks.splice(taskIndex, 1);
  // return deletedTask;
}

function getTaskIndexById(id) {
  return tasks.findIndex((i) => i.id === id);
}

module.exports = {
  getAllTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask
};
