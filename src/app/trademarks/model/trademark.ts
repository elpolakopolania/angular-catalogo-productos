export interface Trademark {
  id: string;
  name: string;
  reference: string;
}

export interface CreateTrademark extends Omit<Trademark, 'id'> {}

export interface UpdateTrademark extends Partial<CreateTrademark> {}

export interface GetTrademark {
  data: Trademark;
}

export interface GetAllTrademark {
  data: Trademark[];
}