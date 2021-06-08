const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const TaskSchema = new Schema({
  Number: {
    type: Number
  },
  Group: [
    {
      type: ObjectId,
      ref: 'student'
    }
  ],
  Class: { type: ObjectId, ref: 'class' }
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;
