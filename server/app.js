const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 2;
const todoList = [
  {
    id: 1,
    text: '할일 - 1',
    done: false,
  },
  {
    id: 2,
    text: '할일 - 2',
    done: false,
  },
  {
    id: 3,
    text: '할일 - 3',
    done: false,
  },
]

app.get('/', (req,res) => {
  res.send('hello world')
}) 

app.get('/api/todo', (req,res) => {
  res.json(todoList);
})

app.post('/api/todo', (req,res) => {
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

