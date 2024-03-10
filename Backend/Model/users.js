const mongoose = require('mongoose');

const usersschema = new mongoose.Schema({
    username:String,
    password:String
    
},{ versionKey: false });

const usersmodel = mongoose.model("users", usersschema);
module.exports = usersmodel;
