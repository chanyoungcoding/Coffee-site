const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coffeeDetail = require('./커피목록.json');

const dbUrl = "mongodb://127.0.0.1:27017/coffeeDB"

mongoose.connect(dbUrl)
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

  const CoffeeSchema = new Schema({
    name: {
      type: String,
      required: [true, '커피 이름이 필요합니다.']
    },
    calory:Number,
    sodium:Number,
    protein:Number, 
    sugar:Number,
    caffeine:Number,
    sat_fat: Number,
    price: Number,
    description: String,
    imgurl: String
})

const Coffee = mongoose.model('Coffee', CoffeeSchema);


const coffeeDB = async () => {
  await Coffee.deleteMany({});
  const Espressolength = coffeeDetail.Espresso.length;
  for(let i = 0; i < Espressolength; i++) {
    
    const Espresso = coffeeDetail.Espresso[i];
    const coffee = new Coffee({
      name: Espresso.name,
      calory: Espresso.calory,
      sodium: Espresso.sodium,
      protein: Espresso.protein,
      sugar: Espresso.sugar,
      caffeine: Espresso.caffeine,
      sat_fat:Espresso.sat_fat,
      description: Espresso.description,
      imgurl: Espresso.imgurl
    })
    await coffee.save();
  }
};

coffeeDB().then(() => {
  mongoose.connection.close();
});