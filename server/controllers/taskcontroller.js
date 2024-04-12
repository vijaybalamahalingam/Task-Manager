exports.homepage = async (req, res) => {
   const locals = {
    title: 'NodeJs',
    description: 'Free'
   }

   res.render('index', locals);
}

exports.addTask = async (req, res) => {
   const locals = {
    title: 'NodeJs',
    description: 'Free'
   }

   res.render('task/add', locals);
}
