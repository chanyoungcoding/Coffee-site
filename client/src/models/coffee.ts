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

export interface RecipeData {
  data : Data[] | undefined
}

export interface LoginData {
  username: string;
  password: string;
}

export interface CoffeeShopData {
  coffeeNumber: number;
  name: string;
  price: number;
  imgurl: string;
}

export interface BasketData {
  name: string;
  price: number;
  count: number;
  userName: string | undefined;
}

export interface shoppingBasketData {
  coffeeName: string;
  coffeeUrl: string;
}
