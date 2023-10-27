import { atom, selector} from 'recoil';
import Cookies from 'js-cookie';

import { CoffeeShopData,shoppingBasketData } from '../models/coffee';

const username = Cookies.get('사용자명')

export const userName = atom({
  key: 'userName',
  default: username
})

export const shoppingList = atom<CoffeeShopData[]>({
  key: 'shoppingList',
  default: []
})

export const shoppingBasket = atom<shoppingBasketData[]>({
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
