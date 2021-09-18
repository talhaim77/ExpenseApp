const userModel = require("../database/schemas/user/users");


const addUser = async (user) => {
    let userExist = await userModel.model.findOne({ email: user.email });
    console.log(userExist)
    // if (userExist) throw "user already exists";
    const newUser = new userModel.model(user)

    await newUser.save()
        .catch((err) => {
            throw new Error(err.message);
        });

    return newUser;
}

module.exports = {
    addUser,
    // getUsers,
    // deleteUser,
    // editUser
}