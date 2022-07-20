import { Trademark } from "src/app/trademarks/model/trademark";

export interface Product {
  id: string;
  name: string;
  size: string;
  observation: string;
  trademark: Trademark;
  inventory_quantity: string;
  boarding_date: string | null;
}

export interface CreateProduct extends Omit<Product, 'id' | 'trademark'> {
  trademarks_id: string;
}

export interface UpdateProduct extends Partial<CreateProduct> {}

export interface GetProduct {
  data: CreateProduct;
}
