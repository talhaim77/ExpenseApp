const mongoose = require('mongoose');
const { schema: groupSchema } = require('../group/groups');

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
    {
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category: {
        type: String,
        enum: ['food', 'rent', 
        ,'education','car', 'holiday', 'other'],
        lowercase: true
      },
      group: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'group'
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    },
    { timestamps: true }
  );
  
  const Expense = mongoose.model('expense', expenseSchema);

  module.exports = {
    model: Expense,
    schema: expenseSchema
  }
