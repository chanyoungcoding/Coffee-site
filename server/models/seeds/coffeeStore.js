const mongoose = require('mongoose');
const coffeeStoreList = require('./커피매점.json');

mongoose.connect("mongodb://127.0.0.1:27017/coffeeDB")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const coffeeStoreSchema = new mongoose.Schema({
  storeName: String,
  latitude: Number,
  longitude: Number
})

const CoffeeStore = mongoose.model('CoffeeStore', coffeeStoreSchema);

const storeDB = async () => {
  await CoffeeStore.deleteMany({});
  for(let list of coffeeStoreList) {
    const coffeeStore = new CoffeeStore({
      storeName: list.storeName,
      latitude: list.latitude,
      longitude: list.longitude
    })
    await coffeeStore.save();
  }
}

storeDB().then(() => {
  mongoose.connection.close();
})