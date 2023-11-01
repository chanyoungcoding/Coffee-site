import { atom, selector} from 'recoil';
import Cookies from 'js-cookie';

// TS
import { BasketData, CoffeeGreat, CoffeeShopData } from '../models/coffee';

// 쿠키 가져오기
const username = Cookies.get('사용자명')

export const userName = atom({
  key: 'userName',
  default: username
})

export const shoppingList = atom<CoffeeShopData[]>({
  key: 'shoppingList',
  default: []
})

export const coffeeGreat = atom<CoffeeGreat[]>({
  key: 'coffeeGreat',
  default: []
})

export const shopBaket = atom<BasketData[]>({
  key: 'shopBasket',
  default: []
})

export const shoppingLength = selector({
  key: 'shppingLength',
  get: ({get}) => {
    const data = get(coffeeGreat);
    return data ? data.length : 0;
  }
})

//ShopDetail

export const orderPrice = atom({
  key: 'orderPrice',
  default: 0
})


