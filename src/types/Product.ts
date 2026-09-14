export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  oldPrice?: number;
  discount?:number;
  rating:number;
  category:string;
  reviewsCount:number;
  stock:number;
}
