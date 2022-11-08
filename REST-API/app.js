// We want to save and read a student from MongoDB using our API.
// We will send a JS object to be saved to the DB, then we will use
// details (name, surname, ID*) that we are aware of i.e the ID.

require("dotenv").config();
let express = require("express");
let api = express(); // API

// we will use JSON to communicate

api.use(express.json());

let mongoose = require("mongoose"); // ORM

const PORT = process.env.PORT || 6084; // if end port doesn't work, app will use 6084.
const HOST = process.env.HOST;
const DB = process.env.DB;
try {
  // try to connect to the DB
  mongoose.connect(DB, { useNewUrlParser: true });
} catch (error) {
  console.error(error);
}

const selectedDatabase = mongoose.connection;
selectedDatabase.on("error", (error) => {
  console.error(`There was a problem ${error.message}`);
});

api.listen(PORT, HOST, () => {
  console.log(`Listening on ${PORT}, and this is working.`);
});
