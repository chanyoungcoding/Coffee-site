const mongoose = require('mongoose');

const coffeeCountrySchema = new mongoose.Schema({
  name: String,
  country: String,
  taste: String,
  beans:String
})

const CoffeeCountry = mongoose.model('CoffeeCountry', coffeeCountrySchema);

module.exports = CoffeeCountry;