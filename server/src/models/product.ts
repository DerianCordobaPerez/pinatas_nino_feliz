import { Document, Schema, model } from 'mongoose';

declare interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
  new: boolean;
  numberReviews: number;
  description?: string;
  images?: string[];
  category: string;
  quantity?: number;
}

const productSchema = new Schema<IProduct>(
  {
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
    new: {
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
  },
  {
    timestamps: true,
  },
);

export default model<IProduct>('Product', productSchema);
