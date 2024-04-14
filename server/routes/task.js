const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontroller');

router.get('/', taskController.homepage);
router.get('/add', taskController.addTask);
router.post('/add', taskController.postTask);
router.get('/view/:id', taskController.view);
router.get('/edit/:id', taskController.edit);
router.put('/edit/:id', taskController.editPost); 
router.delete('/edit/:id', taskController.deleteTask);

module.exports = router;