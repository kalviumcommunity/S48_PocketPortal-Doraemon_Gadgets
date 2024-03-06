const mongoose = require('mongoose');

const DoraemongadgetsSchema = new mongoose.Schema({
  name: String,
  description: String,
  ratings: String,
  category: String,
});

const Doraemongadgetsmodel = mongoose.model("gadgets", DoraemongadgetsSchema);
module.exports = Doraemongadgetsmodel;
