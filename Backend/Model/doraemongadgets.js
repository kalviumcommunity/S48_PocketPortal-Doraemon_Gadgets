const mongoose = require('mongoose');

const DoraemongadgetsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  ratings: String,
  category: String,
});

const Doraemongadgetsmodel = mongoose.model("gadgets", DoraemongadgetsSchema);
module.exports = Doraemongadgetsmodel;
