const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolClassSchema = new Schema({
  number: { type: Number }
});

const SchoolClass = mongoose.model('schoolClass', SchoolClassSchema);
module.exports = SchoolClass;
