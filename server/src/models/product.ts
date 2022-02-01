import { Schema, model } from 'mongoose';
import type { ProductDocument } from '../types/product-document';

const productSchema = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
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
    categories: {
      type: [String],
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  {
    collection: 'Products',
    timestamps: true,
  },
);

export default model<ProductDocument>('Product', productSchema);
