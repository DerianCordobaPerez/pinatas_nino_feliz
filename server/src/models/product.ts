import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  slug: string;
  price: number;
  isNew: boolean;
  numberReviews: number;
  description?: string;
  images?: string[];
  category: string;
  quantity?: number;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isNew: {
    type: Boolean,
    required: true,
  },
  numberReviews: {
    type: Number,
    default: 0,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
});

export default model<IProduct>('Product', productSchema);
