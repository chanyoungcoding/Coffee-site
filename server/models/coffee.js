const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
  coffeeName: {
    type: String,
    required: [true, '커피 이름이 필요합니다.']
  },
  price: Number,
  description: String
})

const Coffee = mongoose.model('Coffee', CoffeeSchema);

module.exports = Coffee;