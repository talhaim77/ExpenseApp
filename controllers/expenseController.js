const expenseModel = require("../database/schemas/expense/expense");

const addExpense = async (expense) => {
    const newExpense = new expenseModel.model(expense)

    await newExpense.save()
        .catch((err) => {
            throw new Error(err.message);
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
const getExpenseByMonth = async (month, year) => {

    const endDate = new Date(year, month, 1);
    const startDate = new Date(year, month, -28)

    const filters = {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        }}
    const foundExpense = await expenseModel.model.find()
    .where(filters)
    .exec()
        .catch((err) => {
            console.log(err.message);
            throw err
        });

    return foundExpense;
}

module.exports = {
    addExpense,
    getExpense,
    getExpenseByMonth,
    // deleteExpense,
    // editExpense
}