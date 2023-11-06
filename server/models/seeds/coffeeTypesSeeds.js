const mongoose = require('mongoose');
const coffeeTypesList = require('./커피종류.json');

mongoose.connect("mongodb://127.0.0.1:27017/coffeeDB")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const coffeeTypesSchema = new mongoose.Schema({ 
  countryImage : String,
  countryNationalFlag: String,
  countryIntroduce: String,
  countryCoffeeName: String
})

const CoffeeType = mongoose.model('CoffeeType', coffeeTypesSchema);

const typeDB = async () => {
  await CoffeeType.deleteMany({});
  for(let list of coffeeTypesList) {
    const coffeeType = new CoffeeType({
      countryImage : list.countryImage,
      countryNationalFlag: list.countryNationalFlag,
      countryIntroduce: list.countryIntroduce,
      countryCoffeeName: list.countryCoffeeName
    })
    await coffeeType.save();
  }
}

typeDB().then(() => {
  mongoose.connection.close();
})