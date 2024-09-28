const getAllTasks = (req,res) => {
    res.send('Get All Tasks')
}

const createNewTask = (req,res) => {
    res.json(req.body)
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