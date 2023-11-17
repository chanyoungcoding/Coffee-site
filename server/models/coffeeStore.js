const mongoose = require('mongoose');

const coffeeStoreSchema = new mongoose.Schema({
  storeName: String,
  latitude: Number,
  longitude: Number
})

const CoffeeStore = mongoose.model('CoffeeStore', coffeeStoreSchema);

module.exports = CoffeeStore