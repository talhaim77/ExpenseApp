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
router.get('/:month/:year', async (request, response) => {
    const { month, year } = request.params;
    try {
        expense = await expenseController.getExpenseByMonth(month,year)
        response.send(expense)
    } catch (err) {
        response.send(err.message)
    }
});

//add expense
router.post('', async (request, response) => {
    // const { error } = validateExpense(request.body)
    // if (error) return response.status(400).send(validation.error.details[0].message);
    
    newExpense = expenseController.addExpense(request.body)
        .then(() => {
            console.log(`add expense to the group`)
            response.send("expense added successfully")
        }).catch((err) => {
            console.log("in error of add expense")
            response.status(400).send(err.message)
        })
    
    
    
});



// //add deal
// router.post('', async (request, response) => {
//     const deal = request.body;
// });

// //edit deal
// router.post('/:id', async (request, response) => {
//     const deal = request.body;
//     const { id } = request.params;
// });

// //delete deal
// router.delete('/:id', async (request, response) => {
//     const { id } = request.params;

// });

// router.get('/location', async (request, response) => {
//     console.log('in api/deals/location');
//     const { dealsID } = request.query;

//     // console.log(dealsID);
//     getDealsLocation(dealsID)
//         .then((res) => {
//             response.send(res);
//         }).catch((err) => {
//             console.log('in error func');
//             response.status(400).send(err.message);
//         });
// });

// //get deal
// router.get('/:id', async (request, response) => {
//     const { id } = request.params;
//     console.log('in api/deals/getdeal');

// });


module.exports = router;