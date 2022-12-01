// external imports
const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(()=>{
    console.log("Successfully connected to MongoDB Atlas!")
  })
  .catch((error)=>{
    console.log("Unable to connect to MongoDb Atlas...")
    console.log(error)
  })
}

module.exports = dbConnect;
