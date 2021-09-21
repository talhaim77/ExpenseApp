const { express } = require('../../server/server');
const expenseController = require("../../controllers/expenseController")

const router = express.Router();


// get all expenses
router.get('', async (request, response) => {
    try {
        expense = await expenseController.getExpense({})
        response.send(expense)
    } catch (err) {
        response.send(err.message)
    }
});

// get expense by month
router.get('/:id/:month/:year', async (request, response) => {
    const { id, month, year } = request.params;
    try {
        expense = await expenseController.getExpenseByMonth(id, month, year)
        response.send(expense)
    } catch (err) {
        response.send(err.message)
    }
});

//add expense
router.post('', async (request, response) => {
    // const { error } = validateExpense(request.body)
    // if (error) return response.status(400).send(validation.error.details[0].message);
    
    expenseController.addExpense(request.body)
        .then((newExpense) => {
            console.log(`add expense to the group`)
            response.json(200,newExpense)
        }).catch((err) => {
            console.log("in error of add expense")
            response.status(400).send(err.message)
        })
}

);

//delete expense
router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    console.log('in get id')
    console.log(id)
    try {
        expense = await expenseController.deleteExpense({_id: id})
        response.send(expense)
    } catch (err) {
        response.send(err.message)
    }
});


module.exports = router;