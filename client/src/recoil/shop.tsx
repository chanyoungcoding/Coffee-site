import {atom, selector} from 'recoil';
import data from '../services/test.json';

interface ShoppingItem {
  id: number;
  name: string;
  price: number;
}

export const shoppingList = atom<ShoppingItem[]>({
  key: 'shoppingList',
  default: data
})

export const shoppingBasket = atom<ShoppingItem[]>({
  key: 'shoppingBasket',
  default: []
})

export const shoppingLength = selector({
  key: 'shppingLength',
  get: ({get}) => {
    const data = get(shoppingBasket);
    return data.length
  }
})

export const shoppingPrice = selector({
  key: 'shppingPrice',
  get: ({get}) => {
    const data = get(shoppingBasket);
    return data.reduce((prev, cur) =>  prev + cur.price, 0)
  }
})