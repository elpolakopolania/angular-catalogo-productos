export interface Trademark {
  id: string;
  name: string;
  reference: string;
}

export interface CreateTrademark extends Omit<Trademark, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateTrademark extends Partial<CreateTrademark> {}