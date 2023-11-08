const mongoose = require('mongoose');
const coffeeCountryList= require('./커피나라.json');

mongoose.connect("mongodb://127.0.0.1:27017/coffeeDB")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const coffeeCountrySchema = new mongoose.Schema({
  name: String,
  country: String,
  taste: String,
  tasteName: String,
  beans:String,
  beansName: String
})

const CoffeeCountry = mongoose.model('CoffeeCountry', coffeeCountrySchema);

const countryDB = async () => {
  await CoffeeCountry.deleteMany({});
  for(let list of coffeeCountryList) {
    const coffeeCountry = new CoffeeCountry({
      name: list.name,
      country: list.country,
      taste: list.taste,
      tasteName: list.tasteName,
      beans: list.baens,
      beansName: list.beansName
    })
    await coffeeCountry.save();
  }
}

countryDB().then(() => {
  mongoose.connection.close();
})