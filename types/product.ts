export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  buyingPrice: number;
  sellingPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFormData {
  name: string;
  category: string;
  quantity: number;
  buyingPrice: number;
  sellingPrice: number;
}