const { Schema, model } = require('mongoose');


const subCategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'SubCategory must have a name!'],
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

});

const SubCategory = model('SubCategory', subCategorySchema);

module.exports = SubCategory;
