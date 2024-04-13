exports.homepage = async (req, res) => {
   const locals = {
    title: 'Hompage',
    description: 'Task Manager'
   }

   res.render('index', locals);
}

exports.addTask = async (req, res) => {
   const locals = {
    title: ' Add Task',
    description: 'Task Manager'
   }

   res.render('task/add', locals);
}

exports.postTask = async (req, res) => {

   console.log(req.body);

   const locals = {
    title: 'New task added!',
    description: 'Task Manager'
   }

   res.render('task/add', locals);
}