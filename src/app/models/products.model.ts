import { Product } from './product.model';

export class Products {
  public products: Product[];
  constructor(total: number, limit: number, skip: number, products: Product[]) {
    this.products = products;
  }
}
