const groupModel = require("../database/schemas/group/groups");
const Expense = require('../database/schemas/expense/expense');


const addGroup = async (group) => {
    const newGroup = new groupModel.model(group)

    await newGroup.save()
        .catch((err) => {
            throw new Error(err.message);
        });

    return newGroup;
}

const editGroup = async (id, group) => {
    const newGroup = await groupModel.model.findOneAndUpdate({ _id: id }, 
        {$set: group})
        .catch((err) => {
            throw new Error(err.message);
        });

    return newGroup;
}

const getGroups = async (group) => {
    const foundGroup = await groupModel.model.find(group)
    .populate( {path: 'expenseList', model: 'expense'}).exec()
        .catch((err) => {
            console.log(err.message);
            throw err
        });

    return foundGroup;
}

const deleteGroup = async (group) => {
    const foundGroup = await groupModel.model.deleteOne(group)
    .catch((err) => {
        console.log(err.message);
        throw err
    });

return foundGroup;
}

module.exports = {
    addGroup,
    getGroups,
    deleteGroup,
    editGroup
}