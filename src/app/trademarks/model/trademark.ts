export interface Product {
  id: string;
  name: string;
  reference: string;
}

export interface CreateProduct extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProduct extends Partial<CreateProduct> {}
