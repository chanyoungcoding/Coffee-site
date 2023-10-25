import { atom, selector} from 'recoil';

import { CoffeeShop } from '../models/coffee';

export const shoppingList = atom<CoffeeShop[]>({
  key: 'shoppingList',
  default: []
})

interface data {
  coffeeName: string;
  coffeeUrl: string;
}

export const shoppingBasket = atom<data[]>({
  key: 'shoppingBasket',
  default: []
})

export const shoppingLength = selector({
  key: 'shppingLength',
  get: ({get}) => {
    const data = get(shoppingBasket);
    return data ? data.length : 0;
  }
})

// export const shoppingPrice = selector({
//   key: 'shppingPrice',
//   get: ({get}) => {
//     const data = get(shoppingBasket);
//     return data.reduce((prev, cur) =>  prev + cur.price, 0)
//   }
// })
