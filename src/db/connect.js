const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017")
    .then(() => {
        console.log("conectado a la base de datos"); 
    }).catch((err) => {
        console.log(`err: ${err}`);
    }); 
}

module.exports = connectDB;

