// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model.js")
const Celebrity = require("../models/Celebrity.model.js")
// all your routes here

// Display form to create a new movie
router.get("/create", async (req, res) => {
    try {
      const celebrities = await Celebrity.find();
      res.render("movies/new-movie", { celebrities });
    } catch (error) {
      console.error("Error fetching celebrities:", error);
      res.render("error", { errorMessage: "Error fetching celebrities" });
    }
  });
  
  // Handle creation of a new movie
  router.post("/create", async (req, res) => {
    try {
      const { title, genre, plot, cast } = req.body;
      const newMovie = await Movie.create({
        title,
        genre,
        plot,
        cast,
      });
      res.redirect("/movies"); // Redirect to the list of movies
    } catch (error) {
      console.error("Error creating movie:", error);
      res.render("error", { errorMessage: "Error creating movie" });
    }
  });
  

module.exports = router;