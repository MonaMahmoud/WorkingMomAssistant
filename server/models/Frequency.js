const { Schema, model } = require('mongoose');


const frequencySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Frequency must have a name!'],
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

});

const Frequency = model('Frequency', frequencySchema);

module.exports = Frequency;
