const mongoose = require('mongoose');

const DoraemongadgetsSchema = new mongoose.Schema({
  name: String,
  description: String,
  image:String,
  ratings: String,
  category: String,
  createdby: String,
},{ versionKey: false });

const Doraemongadgetsmodel = mongoose.model("gadgets", DoraemongadgetsSchema);
module.exports = Doraemongadgetsmodel;

