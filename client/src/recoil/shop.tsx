import { atom} from 'recoil';

import { CoffeeShop } from '../models/coffee';

export const shoppingList = atom<CoffeeShop[]>({
  key: 'shoppingList',
  default: []
})

// export const shoppingBasket = atom<ShoppingItem[]>({
//   key: 'shoppingBasket',
//   default: []
// })

// export const shoppingLength = selector({
//   key: 'shppingLength',
//   get: ({get}) => {
//     const data = get(shoppingBasket);
//     return data.length
//   }
// })

// export const shoppingPrice = selector({
//   key: 'shppingPrice',
//   get: ({get}) => {
//     const data = get(shoppingBasket);
//     return data.reduce((prev, cur) =>  prev + cur.price, 0)
//   }
// })
