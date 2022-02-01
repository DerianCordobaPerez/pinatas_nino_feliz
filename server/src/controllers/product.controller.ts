import Product from '../models/product';
import { Request, Response } from 'express';

export async function index(req: Request, res: Response) {
  const products = await Product.find().lean();
  res.render('products/index', {
    title: 'Lista de productos',
    products,
  });
}

export function create(req: Request, res: Response) {
  res.render('products/create', {
    title: 'Creación de productos',
  });
}

export async function store(req: Request, res: Response) {
  const { name, price, description, quantity, categories, new: isNew } = req.body;
  const { files } = req;
  const slug = `${name.replace(/\s+/g, '-').toLowerCase()}-${Math.floor(Math.random() * 100)}`;
  const images = (files as any[]).map<any>(({ filename }) => filename);

  const product = new Product({
    name,
    slug,
    description,
    price,
    quantity,
    images,
    categories,
    new: isNew,
  });

  await product.save();

  req.flash('success', ['Producto creado correctamente']);
  res.redirect('/products');
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

export async function destroy(req: Request, res: Response) {
  const { slug } = req.params;
  await Product.findOneAndRemove({ slug });
  req.flash('success', ['Producto eliminado correctamente']);
  res.redirect('/products');
}

export async function findByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
}
