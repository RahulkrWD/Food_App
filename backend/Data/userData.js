const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Zomato")

const userSchema = new mongoose.Schema({
    name:{
      type:String
    },
    email:{
       type: String
    },
    phone:{
        type: String
    },
    date:{
        type: Date,
        default:new Date()
    }, 
    password:{
       type: String
    }
})
module.exports = mongoose.model("user", userSchema);