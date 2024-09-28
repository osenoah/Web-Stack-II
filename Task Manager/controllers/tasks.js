const getAllTasks = (req,res) => {
    res.send('Get All Tasks')
}

const createNewTask = (req,res) => {
    res.send('Create New Task')
}

const getSingleTask = (req,res) => {
    res.send('Get single task')
}

const updateTask = (req,res) => {
    res.send('Update Task')
}

const deleteTask = (req,res) => {
    res.send('Delete Task')
}
module.exports = { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask }