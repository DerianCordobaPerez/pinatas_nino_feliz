import { Document, Schema, model } from 'mongoose';

interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
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
