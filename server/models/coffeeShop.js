const mongoose = require('mongoose');

const coffeeShopSchema = new mongoose.Schema({
  name: String,
  imgurl: String,
})

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);

module.exports = CoffeeShop;