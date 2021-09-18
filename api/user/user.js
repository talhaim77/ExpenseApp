const { express } = require('../../server/server');
const userController = require("../../controllers/userController")
const router = express.Router();
const Joi = require('joi');

//add new user
router.post('', async (request, response) => {
    const { error } = validateUser(request.body)
    if (error) return response.status(400).send(validation.error.details[0].message);
    
    
    newUser = userController.addUser(request.body)
        .then(() => {
            console.log("add user")
            response.send("user added successfully")
        }).catch((err) => {
            console.log("in error of add user")
            response.status(400).send(err.message)
        })
});


function validateUser(user) {
    const schema = Joi.object({
      name: Joi.string().min(1).max(30).required(),
      email: Joi.string().min(5).max(50).required().email(),
      password: Joi.string().min(5).max(255).required()
    });
    const validation = schema.validate(user);
    return validation;
  }

module.exports = router;