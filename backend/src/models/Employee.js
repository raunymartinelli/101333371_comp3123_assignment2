const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        maxlength: 100
    },
    last_name:{
        type: String,
        required: true,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    salary: {
        type: Number,
        required: true
    },

},
    {timestamps: true});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;