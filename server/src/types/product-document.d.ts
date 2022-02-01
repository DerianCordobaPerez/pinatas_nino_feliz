import { Document } from 'mongoose';

declare namespace Product {
  type ProductDocument = Document & {
    name: string;
    slug: string;
    price: number;
    new: boolean;
    numberReviews: number;
    description?: string;
    images?: string[];
    categories: string[];
    quantity?: number;
  };
}

export = Product;
