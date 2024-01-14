const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { body, validationResult } = require("express-validator");
 const jwt = require("jsonwebtoken")
const userModel = require('./Data/userData')
const foodCategoryModel = require("./Data/foodCategory");
const foodDataModel = require("./Data/foodData");
const foodData = require('./Data/foodData');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

// Home page 
// app.get("/", function(req, res){
//   res.send("Home")
// })

// Signup page
app.post('/signup',
[
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("phone").isLength({min: 10, max:10}),
  body("password", "password is too short").isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, phone, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login page
app.post('/login',
[
  body("email").isEmail(),
  body("password", "password is too short").isLength({ min: 5 }),
]
, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
         // Generate JWT token
         const token = jwt.sign({userId: user._id}, 'your_secret_key', {expiresIn: '1h'});
        res.status(200).json({ message: 'Login successful!', token });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// foodData 
app.post("/foodData", async function(req, res){
  try{
    let foodData = await foodDataModel.find();
    res.send(foodData)
  }
  catch(err){
console.error(err.message);
res.send("server error")
  }
});

// food category
app.post("/foodCategory", async function(req, res){
  try{
    let foodCategory = await foodCategoryModel.find();
    res.send(foodCategory)
  }
  catch(err){
    console.error(err.message);
res.send("server error")
  }
})

app.listen(6600)
