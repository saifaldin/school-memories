const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  Number: {
    type: Number
  }
});

const Class = mongoose.model('class', ClassSchema);
module.exports = Class;
