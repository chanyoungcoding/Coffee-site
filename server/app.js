const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const Coffee = require('./models/coffee');
const User = require('./models/users');
const CoffeeShop = require('./models/coffeeShop');
const CoffeeType = require('./models/coffeeType');
const CoffeeCountry = require('./models/coffeeCountry');


//MongoDB 연결
// const dbUrl = process.env.DB_URL;

mongoose.connect(process.env.DB)
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/coffee', async (req,res) => {
  const coffee = await Coffee.find({});
  res.json(coffee);
})

app.get('/api/coffeeNumber', async(req,res) => {
  let number = req.query.number;
  const coffee = await Coffee.find({}).limit(number);
  res.json(coffee);
})

app.get('/api/coffeeName', async (req,res) => {
  const coffeeName = req.query.name
  const coffee = await Coffee.find({name : coffeeName});
  res.json(coffee)
})

app.get('/api/coffeeShop', async (req,res) => {
  const coffeeShop = await CoffeeShop.find({});
  res.json(coffeeShop);
})

app.get('/api/coffeeShopDetail', async (req,res) => {
  const coffeeName = req.query.name
  const coffeeShopDetail = await CoffeeShop.find({name: coffeeName});
  res.json(coffeeShopDetail);
})

app.get('/api/coffeeTypes', async (req,res) => {
  const coffeeTypes = await CoffeeType.find({})
  res.json(coffeeTypes);
})

app.get('/api/coffeeCountry', async(req,res) => {
  const coffeeCountry = await CoffeeCountry.find({});
  res.json(coffeeCountry);
})

app.post('/api/coffeeBasket', async(req,res) => {
  const {price, count, name, userName} = req.body;
  try {
    const user = await User.findOne({username: userName});
    const foundItem = user.shoppingBasket.find(item => item.name === name);
    if(foundItem) {
      foundItem.count += count
      foundItem.price += price
      await user.save();
      res.json('good');
    } else {
      user.shoppingBasket.push({name, count, price});
      await user.save();
      res.json('good');
    }
  } catch(e) {
    console.log(e)
    res.status(500).json(e)
  }
})

app.post('/api/coffeeGreat', async (req,res) => {
  const { userName } = req.body;
  try {
    const user = await User.findOne({username: userName});
    if(!user) {
      return res.status(404).json({error});
    }
    user.coffeeGreat.push(req.body);
    await user.save();
    res.json('succeess');
  } catch(e) {
    console.log(e);
    res.status(500).json(e);
  }
})

app.get('/api/user', async (req,res) => {
  const userName  = req.query.user
  try {
    const user = await User.findOne({username:userName});
    const great = user.coffeeGreat;
    res.json(great);
  } catch(e) {
    res.json(e);
  }
})

app.get('/api/Basket', async (req,res) => {
  const userName  = req.query.user
  try {
    const user = await User.findOne({username:userName});
    const basket = user.shoppingBasket;
    res.json(basket);
  } catch(e) {
    res.json(e);
  }
})

app.post('/api/login', async (req,res) => {
  const {username, password} = req.body
  try {
    const newUser = await User.find({username: username, password: password})
    if(newUser[0].username === username && newUser[0].password === password) res.json(req.body);
  } catch(e) {
    res.json('실패');
  }
})

app.post('/api/signin', async (req, res) => {
  const { username } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.json('existed username');
  }
  const newUser = new User(req.body);
  await newUser.save();
  res.json('success');
});

app.listen(process.env.PORT, () => {
  console.log('서버 실행')
})

