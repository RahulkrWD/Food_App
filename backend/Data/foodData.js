const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Zomato");

const foodDataSchema = new mongoose.Schema({})

module.exports = mongoose.model("foodData", foodDataSchema);