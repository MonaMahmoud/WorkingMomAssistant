const { Schema, model } = require('mongoose');


const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Category must have a name!'],
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

});

const Category = model('Category', categorySchema);

module.exports = Category;
