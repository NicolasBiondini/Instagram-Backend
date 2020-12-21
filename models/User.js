const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
        // trim es que si alguien coloca espacios mongo los borra
    },
    email: {
        type: String,
        trim: true,
        required: true        
    },
    pasword: {
        type: String,
        trim: true,
        required: true
    },
    profilePicture: {
        type: String,
        default: '../resources/eggProfile.png'
    }
});

//creo modelo de User basandose en userSchema

module.exports = mongoose.model('User', userSchema);