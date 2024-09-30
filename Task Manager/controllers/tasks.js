const Task = require('../models/tasks')

const getAllTasks = (req,res) => {
    res.send('Get All Tasks')
}

const createNewTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
}

const getSingleTask = (req,res) => {
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.send('Update Task')
}

const deleteTask = (req,res) => {
    res.send('Delete Task')
}
module.exports = { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask }