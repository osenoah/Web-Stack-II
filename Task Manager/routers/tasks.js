const express = require('express');
const router = express.Router();
const { getAllTasks } = require('../controllers/tasks')
const { createNewTask } = require('../controllers/tasks')
const { getSingleTask } = require('../controllers/tasks')
const { updateTask } = require('../controllers/tasks')
const { deleteTask } = require('../controllers/tasks')


router.route('/').get(getAllTasks)
router.route('/').post(createNewTask)
roouter.route('/').get(getSingleTask)
router.route('/').patch(updateTask)
router.route('/').delete(deleteTask)

module.exports = router;