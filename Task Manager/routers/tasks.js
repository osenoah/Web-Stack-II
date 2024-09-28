const express = require('express');
const router = express.Router();
const { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createNewTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = router;