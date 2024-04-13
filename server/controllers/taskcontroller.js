const Task = require('../models/task');

exports.homepage = async (req, res) => {
   try {
      const message = req.flash('info');
      const locals = {
         title: 'Homepage',
         description: 'Task Manager'
      };
      const tasks = await Task.find({}).limit(22);
      res.render('index', { locals, message, tasks });
   } catch(error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
   }
};

exports.addTask = async (req, res) => {
   const locals = {
      title: 'Add Task',
      description: 'Task Manager'
   };
   res.render('task/add', locals);
};

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

exports.view = async (req, res) => {
   try {
     const task = await Task.findOne({ _id: req.params.id });
 
     const locals = {
       title: "View Task",
       description: "Free NodeJs User Management System",
     };
 
     res.render("task/view", {
       locals,
       task
     });
   } catch (error) {
     console.log(error);
     res.status(500).send('Internal Server Error');
   }
 };
