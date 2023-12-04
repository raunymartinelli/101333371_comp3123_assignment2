const express = require("express");
const employeeRoutes = require("./routes/employee");
const userRoutes = require("./routes/users");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

mongoose.set('strictQuery', true);

const app = express();

const SERVER_PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


const DB_CONNECTION_STRING = process.env.MONGODB_URI || "mongodb://root:example@localhost:27017/?authMechanism=DEFAULT&authSource=admin"

    //"mongodb+srv://raunymartinelli:FbFv6afKNzNoeslD@cluster0.ws44tvx.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority"

    //


console.log(DB_CONNECTION_STRING);

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "fs-a1"
})
    .then(()=>{
        console.log(`Connected to MongoDB ${DB_CONNECTION_STRING}`);
    })
    .catch((error)=>{
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    });

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

// Define a route handler for the root path ("/")
app.get("/", (req, res) => {
    res.send("<h1>Welcome to your Express.js application for Assignment 1 from COMP3123</h1>");
});

app.use(employeeRoutes);
app.use(userRoutes);

app.get('/disconnect-mongodb', (req, res) => {
    mongoose.disconnect((err) => {
        if (err) {
            console.error('Error disconnecting from MongoDB:', err);
            res.status(500).json({ status: false, message: 'Error disconnecting from MongoDB' });
        } else {
            console.log('Disconnected from MongoDB');
            res.status(200).json({ status: true, message: 'Disconnected from MongoDB' });
        }
    });
});



// Start the Express Server
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});