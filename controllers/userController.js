const User = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message : error.message});
    }

}

const getUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const getSingleUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(500).json({message : "User Not Found"});
        }
        res.status(200).json(user);
    
    } catch (error) {
        res.status(500).json({message : error.message});
    }



}

const updateUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new : true});
        if(!user){
            return res.status(500).json({message : "User Not Found"});
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    
    } catch (error) {
        res.status(500).json({message : error.message});
    }



}

const deleteUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id, req.body, {new : true});
        if(!user){
            return res.status(500).json({message : "User Not Found"});
        }
        res.status(200).json({message : `Product Deleted Successfully : ${id}`});
    
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
}




