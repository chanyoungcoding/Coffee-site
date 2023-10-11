const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const Coffee = require('./models/coffee');

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

app.get('/api/coffeeName', async (req,res) => {
  const coffeeName = req.query.name
  const coffee = await Coffee.find({name : coffeeName});
  res.json(coffee)
})

app.listen(process.env.PORT, () => {
  console.log('서버 실행')
})

