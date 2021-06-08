const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const StudentSchema = new Schema({
  Name: {
    type: String
  },
  Class: { type: ObjectId, ref: 'class' }
});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;
