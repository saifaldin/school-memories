const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const TaskImageSchema = new Schema({
  group: [{ type: ObjectId, ref: 'student' }]
});

const TaskImage = mongoose.model('taskImage', TaskImageSchema);
module.exports = TaskImage;
