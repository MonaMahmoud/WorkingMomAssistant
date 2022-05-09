const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


function checkEffort (effort) {
  return (effort > 0 ) ;
}

const taskSchema = new Schema({
  taskDesc: {
    type: String,
    required: [true, 'You need to describe the task!'],
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  taskUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  taskEffort: {
    type: Number,
    required: true,
    validate: checkEffort,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  taskLabel: {
    type: Schema.Types.ObjectId,
    ref: 'Child',
  },

  taskSubCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
  },

  

  
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Task = model('Task', taskSchema);

module.exports = Task;
