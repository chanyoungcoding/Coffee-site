export interface Imgbox {
  imgsrc: string
  imgintro: string
  imghref: string
} 

export interface Data {
  _id: string;
  name: string;
  calory: number;
  sodium: number;
  protein: number;
  sugar: number;
  caffeine: number;
  sat_fat: number;
  description: string;
  imgurl:string;
  materials: string[];
  howToMake: string[];
}

export interface DetailItem {
  name: string;
  detail: number | null;
  number?: number;
}

export interface MenuDetail {
  coffeeName:string;
  coffeeIntro:string;
  coffeePrice:string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface CoffeeShopData {
  coffeeNumber: number;
  name: string;
  imgurl: string;
}

export interface shoppingBasketData {
  coffeeName: string;
  coffeeUrl: string;
}
