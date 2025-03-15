const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connectToDatabase;
