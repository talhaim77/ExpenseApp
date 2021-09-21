const { express } = require('../../server/server');
const groupController = require("../../controllers/groupController")
const router = express.Router();
const Joi = require('joi');


//get groups
router.get('', async (request, response) => {
    try {
        groups = await groupController.getGroups({})
        response.send(groups)
    } catch (err) {
        response.send(err.message)
    }
});

//get group
router.get('/:id', async (request, response) => {
    const { id } = request.params;
    console.log('in get id')
    console.log(id)
    try {
        groups = await groupController.getGroups({_id: id})
        response.send(groups)
    } catch (err) {
        response.send(err.message)
    }
});

//add group
router.post('', async (request, response) => {
    const { error } = validateGroup(request.body)
    if (error) return response.status(400).send(error.details[0].message);
    
    newGroup = groupController.addGroup(request.body)
        .then(() => {
            console.log("add group")
            response.send("group added successfully")
        }).catch((err) => {
            console.log("in error of add group")
            response.status(400).send(err.message)
        })
});

//edit group
router.patch('/:id', async (request, response) => {
    const { id } = request.params;
    try {
        newGroup = await groupController.editGroup(id, request.body)
        response.send(newGroup)
    } catch (err) {
        response.status(400).send(err.message)
    }
});

//delete group
router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    console.log('in get id')
    console.log(id)
    try {
        groups = await groupController.deleteGroup({_id: id})
        response.send(groups)
    } catch (err) {
        response.send(err.message)
    }
});

// router.get('/location', async (request, response) => {
//     console.log('in api/deals/location');
//     const { dealsID } = request.query;
// });

// validate post
function validateGroup(group){
    const schema = Joi.object({
        description: Joi.string().alphanum().min(2).max(20).required()
    });
    const validation = schema.validate(group);
    return validation;
}

module.exports = router;