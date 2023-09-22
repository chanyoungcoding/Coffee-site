const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Coffee = require('./models/coffee');

//MongoDB 연결
// const dbUrl = process.env.DB_URL;
const dbUrl = "mongodb://127.0.0.1:27017/coffeeDB"

mongoose.connect(dbUrl)
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

app.post('/api/coffee', (req,res) => {
  const {text, done} = req.body;
  todoList.push({
    id: id++,
    text,
    done
  });
  return res.send('success')
})

app.listen('4000', () => {
  console.log('서버 실행')
})

