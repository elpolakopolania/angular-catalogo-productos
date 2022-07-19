export interface Solicitud {
  id: string;
  name: string;
  size: string;
  observation: string;
  trademar_id: BigInteger;
  inventory_quantity: bigint;
  boarding_date: Date;
}

export interface CreateSolicitud extends Omit<Solicitud, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateSolicitud extends Partial<CreateSolicitud> {}
