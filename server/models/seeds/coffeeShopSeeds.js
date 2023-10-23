const mongoose = require('mongoose');
const coffeeShopList = require('./커피쇼핑.json');

mongoose.connect("mongodb://127.0.0.1:27017/coffeeDB")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const coffeeShopSchema = new mongoose.Schema({
  name: String,
  imgurl: String
})

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);

const shopDB = async () => {
  await CoffeeShop.deleteMany({});
  for(let list of coffeeShopList) {
    const coffeeShop = new CoffeeShop({
      name: list.name,
      imgurl: list.imgurl
    })
    await coffeeShop.save();
  }
}

shopDB().then(() => {
  mongoose.connection.close();
})


