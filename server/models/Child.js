const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


function checkAge (age) {
    return (age > 0 && age <= 16 ) ;
  }



const childSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Child must have a name!'],
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Child must have an age!'],
    trim: true,
    validate: checkAge,
  },

  mom: 
    {
      type: String,
     required: true,
    },

  // mom: 
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //   },

  //could be birthday later
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
});

const Child = model('Child', childSchema);

module.exports = Child;
