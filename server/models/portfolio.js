var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
  about:String,
  email:String,
  phone:String,
  homepage:String,
  projects:[{type:mongoose.Schema.Types.ObjectId,ref:'Project'}]
})

mongoose.model('Portfolio',portfolioSchema);
