const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Zomato");

const foodCategorySchema = new mongoose.Schema({})

module.exports = mongoose.model("foodCategory", foodCategorySchema);