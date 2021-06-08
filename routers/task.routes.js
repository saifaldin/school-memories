const express = require('express');
const taskController = require('../controllers/task.controller');
const router = express.Router();

router.route('/').post(taskController.createTask);
router.route('/images').post(taskController.generateImage);

module.exports = router;
