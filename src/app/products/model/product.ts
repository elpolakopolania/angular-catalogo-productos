export interface Product {
  id: string;
  name: string;
  size: string;
  observation: string;
  trademar_id: BigInteger;
  inventory_quantity: bigint;
  boarding_date: Date;
}

export interface CreateProduct extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProduct extends Partial<CreateProduct> {}
