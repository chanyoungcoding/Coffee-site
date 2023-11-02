import { atom, selector} from 'recoil';
import Cookies from 'js-cookie';

// TS
import { BasketData, CoffeeGreat, CoffeeShopData } from '../models/coffee';

// 쿠키 가져오기
const username = Cookies.get('사용자명')

// 유저 이름 데이터
export const userName = atom({
  key: 'userName',
  default: username
})

// 커피숍 데이터
export const shoppingList = atom<CoffeeShopData[]>({
  key: 'shoppingList',
  default: []
})

// 커피 좋아요 데이터
export const coffeeGreat = atom<CoffeeGreat[]>({
  key: 'coffeeGreat',
  default: []
})

// 장바구니 데이터 
export const shopBaket = atom<BasketData[]>({
  key: 'shopBasket',
  default: []
})

// 커피 저장 갯수 데이터
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


