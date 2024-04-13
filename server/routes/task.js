const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.homepage);
router.get('/add', taskController.addTask);
router.post('/add', taskController.postTask);

module.exports = router;
