const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  plot: {
    type: String,
    require: true,
  },
  cast: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
