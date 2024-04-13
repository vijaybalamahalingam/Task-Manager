const Task = require('../models/task');

exports.homepage = async (req, res) => {

   const message = req.flash('info');

   const locals = {
    title: 'Homepage',
    description: 'Task Manager'
   }

   res.render('index', { locals, message });
}

exports.addTask = async (req, res) => {
   const locals = {
    title: 'Add Task',
    description: 'Task Manager'
   }

   res.render('task/add', locals);
}

exports.postTask = async (req, res) => {
   const taskData = {
      taskName: req.body.taskName,
      details: req.body.details
   };

   try {
      await Task.create(taskData); 
      req.flash('info', 'New task has been added!');
      res.redirect('/');
   } catch(error) {
     console.error(error);
     res.status(500).send('Internal Server Error');
   }
};
