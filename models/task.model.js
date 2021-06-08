const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const TaskSchema = new Schema({
  number: { type: Number },
  group: [{ type: ObjectId, ref: 'student' }],
  class: { type: ObjectId, ref: 'schoolClass' }
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;
