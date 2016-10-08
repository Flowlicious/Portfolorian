var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  title:String,
  description:String,
  portfolio:{type:mongoose.Schema.Types.ObjectId,ref:'portfolio'}
});

mongoose.model('Project',projectSchema);
