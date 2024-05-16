const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection Successfully");
    } catch (error) {
        console.log("error");
    }
};

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();