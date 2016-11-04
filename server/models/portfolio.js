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
  projects:[],
  userid:String,
  picture: String
})

mongoose.model('Portfolio',portfolioSchema);
