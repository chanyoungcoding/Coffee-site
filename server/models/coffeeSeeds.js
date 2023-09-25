const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbUrl = "mongodb://127.0.0.1:27017/coffeeDB"

mongoose.connect(dbUrl)
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const CoffeeSchema = new Schema({
  coffeeName: {
    type: String,
    required: [true, '커피 이름이 필요합니다.']
  },
  price: Number,
  description: String
})

const Coffee = mongoose.model('Coffee', CoffeeSchema);

const coffeeDB = async () => {
  await Coffee.deleteMany({});
  for(let i = 0; i < 10; i++) {
    const coffee = new Coffee({
      coffeeName: '아메리카노',
      calory:5,
      sodium: 5,
      protein: 5,
      sugar: 5,
      caffeine: 5,
      price: 2500,
      description: '아메리카노는 에스프레소의 진한 풍미를 잘 느낄 수 있는 음료입니다.'
    })
    await coffee.save();
  }
};

coffeeDB().then(() => {
  mongoose.connection.close();
});