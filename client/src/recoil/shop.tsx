import {atom, selector} from 'recoil';
import data from '../services/test.json';

interface ShoppingItem {
  name: string;
  price: number;
}

export const shoppingList = atom<ShoppingItem[]>({
  key: 'shoppingList',
  default: data
})

export const shoppingLength = selector({
  key: 'shppingLength',
  get: ({get}) => {
    const data = get(shoppingList);
    return data.length
  }
})