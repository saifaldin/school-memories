const express = require('express');
const taskController = require('../controllers/task.controller');
const router = express.Router();

router.route('/images').post(taskController.createImage);
router.route('/').post(taskController.createTask);

module.exports = router;
