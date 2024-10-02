const Task = require('../models/tasks')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }catch (err){
        res.status(500).json({ msg: err })
    }
}

const createNewTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json({ task })
    }catch(err){
        res.status(500).json({ msg: err })
    }
    
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