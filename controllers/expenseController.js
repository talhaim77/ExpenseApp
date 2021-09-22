const expenseModel = require("../database/schemas/expense/expense");
const groupModel = require("../database/schemas/group/groups");

const addExpense = async (expense) => {
    const newExpense = new expenseModel.model(expense)
    console.log(expense.group)
    await newExpense.save()
        .catch((err) => {
            console.log(err.message);
        });

    const group = await groupModel.model.findById(expense.group)
        .catch((err) => {
            console.log(err.message);
        });

    group.expenseList.push(newExpense.id);
    await group.save()
        .catch((err) => {
            console.log(err.message);
        });

    return newExpense;
}


const getExpense = async (expense) => {
    const foundExpense = await expenseModel.model.find(expense).exec()
        .catch((err) => {
            console.log(err.message);
            throw err
        });

    return foundExpense;
}

// get all documents by specific month/year
const getExpenseByMonth = async (id, month, year) => {
    let nextMonth = (+month) + (+1);
    nextMonth = ('0' + nextMonth).slice(-2);
    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(`${year}-${nextMonth}-01`);
    console.log(startDate)
    console.log(endDate)

    const filters = {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        }
    };
    const foundExpense = await expenseModel.model.find()
    .where(filters)
    .where('group').equals(id)
    .exec()
        .catch((err) => {
            console.log(err.message);
            throw err
        });

    return foundExpense;
}

const deleteExpense = async (expense) => {
    const foundExpense = await expenseModel.model.deleteOne(expense)
    .catch((err) => {
        console.log(err.message);
        throw err
    });

return foundExpense;
}

const editExpense = async (id, expense) => {
    const newGroup = await expenseModel.model.findOneAndUpdate({ _id: id }, 
        {$set: expense})
        .catch((err) => {
            throw new Error(err.message);
        });

    return newGroup;
}
module.exports = {
    addExpense,
    getExpense,
    getExpenseByMonth,
    deleteExpense,
    editExpense
};