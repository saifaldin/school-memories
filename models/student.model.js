const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const StudentSchema = new Schema({
  name: { type: String },
  class: { type: ObjectId, ref: 'schoolClass' }
});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;
