import { Trademark } from "src/app/trademarks/model/trademark";

export interface Product {
  id: string;
  name: string;
  size: string;
  observation: string;
  trademark: Trademark;
  inventory_quantity: bigint;
  boarding_date: Date;
}

export interface CreateProduct extends Omit<Product, 'id' | 'trademark'> {
  trademark_id: bigint;
}

export interface UpdateProduct extends Partial<CreateProduct> {}

export interface GetProduct {
  data: Product;
}
