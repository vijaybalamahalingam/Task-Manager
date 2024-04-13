const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   taskName: String,
   details: String,
   createdAt: {
       type: Date,
       default: Date.now()
   },
   updatedAt: {
       type: Date,
       default: Date.now()
   }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
