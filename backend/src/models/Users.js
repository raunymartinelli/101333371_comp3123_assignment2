const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    password:{
        type: String,
        required: true,
        maxlength: 50
    }
},
    {timestamps: true})


const User = mongoose.model("Users", userSchema);
module.exports = User;