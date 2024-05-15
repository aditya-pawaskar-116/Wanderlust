const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./src/db/db");
const Listing = require("./models/listing.js");

app.get("/", (req, res) => {
    res.send("Hi I am root");
});

app.get("/textListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is listening to port : ${PORT}`); 
});

dbConnection();










