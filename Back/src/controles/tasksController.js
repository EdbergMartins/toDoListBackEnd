const tasksModule = require('../modules/tasaksModule');


const getAll = async (_rec, res) => {
  
  const tasks = await tasksModule.getAll();

  return res.status('200').json(tasks[0])

}

const createTask = async (rec, res) => {
  const createdTasks = await tasksModule.createTask(rec.body);
  return res.status('201').json(createdTasks)
}

const deleteTask = async (rec, res) => {
  const deleteTask = await tasksModule.deleteTask(rec.body);
  return res.status('200').json({menssage: 'Task deleted succefully'})
}

const atualizeStatusTask = async (rec, res) => {
  const atualizeStatusTask = await tasksModule.atualizeStatusTask(rec);
  return res.status('200').json({ message: 'Task ataulized' });
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  atualizeStatusTask
}