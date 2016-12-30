import Task from '../models/task.js';

export const getList = async function(req, res, next) {
  const userId = req.user._id;
  const {row} = req.body;
  let tasks;

  try {
    tasks = await Task.find({
      row: row
    }).populate('row')
  } catch (e) {
    return next();
  }

  res.json(tasks);
}

export const addTask = async function(req, res, next) {
  const taskObj = req.body;
  const userId = req.user._id
  taskObj.postedBy = userId;
  let task;

  try {
    task = await Task.create(taskObj);
  } catch ({message}) {
    return next({
      status: 500,
      message: message
    })
  }

  res.json(task);
}

export const getTask = async function(req, res, next) {
  const taskId = req.params.id;
  const userId = req.user._id;
  let task;

  try {
    task = await Task.findOne({
      _id: taskId,
      postedBy: userId
    }).populate('postedBy')
  } catch (e) {
    return next({
      status: 404,
      message: 'Not found'
    })
  }

  res.json(task);
}

export const delTask = async function(req, res, next) {
  const taskId = req.params.id;
  const userId = req.user._id;

  try {
    await Task.remove({
      _id: taskId,
      postedBy: userId
    }).populate('postedBy')
  } catch ({message}) {
    return next({
      message: message
    })
  }

  res
    .status(200)
    .json({
      status: 'succesful'
    })
}

export const completeTask = async function(req, res, next) {
  const taskId = req.params.id;
  const userId = req.user._id;

  let task = await Task.findOne({
    _id: taskId,
    postedBy: userId
  }).populate('postedBy')

  if(!task) {
    return next({
      status: 403,
      message: 'Task not found'
    })
  }

  try {
    task.completed = true;
    task.save();
  } catch ({message}) {
    return next({
      message:message
    })
  }

  res
    .status(200)
    .json({
      status: 'succesful'
    })
}
