//  Add your code here
const mongoose = require("mongoose")


const celebritySchema = new mongoose.Schema({

name:{
    type: String,
    require: true
},
occupation:{
    type: String,
    require: true
},
catchPhrase:{
    type: String,
    require: true
}

})

const Celebrity = mongoose.model("Celebrity",celebritySchema)

module.exports = Celebrity;
