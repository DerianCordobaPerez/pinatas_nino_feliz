import Product from '../models/product';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response) {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
}

export async function find(req: Request, res: Response) {
  const products = await Product.find();
  res.json(products);
}

export async function findOne(req: Request, res: Response) {
  const { slug } = req.params;
  const product = await Product.findOne({ slug });
  res.json(product);
}

export async function update(req: Request, res: Response) {
  const { slug } = req.params;
  const product = await Product.findOneAndUpdate({ slug }, req.body);
  res.json(product);
}

export async function remove(req: Request, res: Response) {
  const { slug } = req.params;
  await Product.findOneAndRemove({ slug });
  res.json({ message: 'Product removed' });
}

export async function findByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
}
