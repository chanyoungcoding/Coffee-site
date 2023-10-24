const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type:String,
    required: [true, '유저 이름이 없습니다.']
  },
  password: {
    type: String,
    required: [true, '패스워드가 없습니다.']
  },
  shoppingBasket:{
    type: [Number],
    default: []
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;