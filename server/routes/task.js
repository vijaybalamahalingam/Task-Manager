const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontroller');

router.get('/', taskController.homepage);
router.get('/add', taskController.addTask);
router.post('/add', taskController.postTask);
router.get('/view/:id', taskController.view); 

module.exports = router;