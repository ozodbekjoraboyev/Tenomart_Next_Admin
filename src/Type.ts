export type TopKatigoriesType = {
  createdAt: string;
  description: string;
  id: number;
  name: string;
};

export type CardsDataType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
};

export type BAnnerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};

