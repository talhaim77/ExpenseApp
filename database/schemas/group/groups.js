const mongoose = require('mongoose');
const { schema: expenseSchema } = require('../expense/expense');

const Schema = mongoose.Schema;

const groupSchema = new Schema(
    {
      description: {
        type: String,
        required: true
      },
      expenseList: [{
          type: Schema.Types.ObjectId,
          ref: 'expense',
        }],
      total: {
          type: Number,
          default: 0
      }
    },
    { timestamps: true }
  );
  
  const groupModel = mongoose.model('group', groupSchema);

  module.exports = {
    model: groupModel,
    schema: groupSchema
  }