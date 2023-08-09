const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model.js");
 const router = express.Router();

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show me the money!"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "All the single ladies!"
  },
  {
    name: "Daffy Duck",
    occupation: "Cartoon Character",
    catchPhrase: "You're despicable!"
  }
];

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-movies-celebrities";

mongoose

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Create celebrities
    return Celebrity.create(celebrities);
  })
  .then(createdCelebrities => {
    console.log(`${createdCelebrities.length} celebrities have been created.`);

    // Disconnect from the database
    return mongoose.disconnect();
  })
  .then(() => {
    console.log("Disconnected from the database");
  })
  .catch(err => {
    console.error("Error:", err);
    mongoose.disconnect();
  });

  module.exports = router;
