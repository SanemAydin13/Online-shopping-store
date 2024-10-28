import { IProduct } from "./product";

export interface ICartItem {
  title: string | undefined;
  images: string | undefined;
  product: IProduct;
  quantity: number;
}
