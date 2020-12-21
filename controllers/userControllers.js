const User = require('../models/User');

// Cuando se crea un nuevo user
exports.newUser = async (req, res, next) => {
    
    //create object whit data of req.body
    const user = new User(req.body);
    
    try {
        await user.save();
        res.json({ message: 'User Created! Congrats!'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//ver todos los usuarios
exports.viewUsers = async (req, res, next) => {
    
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        next();
    }
}

//encontrar user by id

exports.viewUser = async (req, res, next) => {
    
    try {
        //el req.params.id es params pq es lo q esta despues de localhost/algo/ESO, y en index.js routes pusimos :id por eso se llama id
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
        next();
    }
}

//actualizar user
exports.actualizeUser = async (req, res, next) => {
    
    try {
        //el req.params.id es params pq es lo q esta despues de localhost/algo/ESO, y en index.js routes pusimos :id por eso se llama id
        const user = await User.findOneAndUpdate({_id : req.params.id},
            req.body,
            {
            //para que nos traiga el nuevo resultado
            new: true
        })
        res.json(user);
    } catch (error) {
        console.log(error);
        next();
    }
}

//delete user by id
exports.deleteUser = async (req, res, next) => {
    
    try {
        //el req.params.id es params pq es lo q esta despues de localhost/algo/ESO, y en index.js routes pusimos :id por eso se llama id
        await User.findOneAndDelete({_id : req.params.id});
        res.json({message : 'user deleted!'});
    } catch (error) {
        console.log(error);
        next();
    }
}