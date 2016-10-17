var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
  about:String,
  motto:String,
  firstname:String,
  lastname:String,
  facebook:String,
  twitter:String,
  xing:String,
  email:String,
  phone:String,
  homepage:String,
  projects:[{type:mongoose.Schema.Types.ObjectId,ref:'Project'}],
  userId:String
})

mongoose.model('Portfolio',portfolioSchema);
