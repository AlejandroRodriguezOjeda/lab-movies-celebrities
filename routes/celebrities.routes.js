// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js")

// all your routes here



router.get("/", async (req, res, next) => {
    try {
        
      const celebrities = await Celebrity.find();
      res.render("celebrities/celebrities", { celebrities });
    } catch (error) {
     
    }
  });
  
// console.log(celebrities);
router.get("/create", (req,res,next)=>{
    res.render("celebrities/new-celebrity")
})

router.post("/create", async (req, res) => {
    try {
      const { name, occupation, catchPhrase } = req.body;
      const newCelebrity = await Celebrity.create({
        name,
        occupation,
        catchPhrase,
      });
      res.redirect("/celebrities"); 
    } catch (error) {
      res.render("celebrities/new-celebrity", { errorMessage: "Error creating celebrity" });
    }
  });
  
  


module.exports = router;