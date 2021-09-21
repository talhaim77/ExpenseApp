const userModel = require("../database/schemas/user/users");


const addUser = async (user) => {
    let userExist = await userModel.model.findOne({ email: user.email });
    // console.log(userExist)
    if (userExist) throw new Error('user already exists!');
    const newUser = new userModel.model(user)

    await newUser.save()
        .catch((err) => {
            throw new Error(err.message);
        });

    return newUser;
}

const getUsers = async (user) => {
    const foundUser = await groupModel.model.find(user)
    .populate( {path: 'expenseList', model: 'expense'}).exec()
        .catch((err) => {
            console.log(err.message);
            throw err
        });

    return foundGroup;
}

module.exports = {
    addUser,
    getUsers,
    // deleteUser,
    // editUser
}