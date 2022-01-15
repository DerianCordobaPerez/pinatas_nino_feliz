import ProductListItem from './productListItem'

export default function ProductList ({ products }) {
  if (!products.length) return <p>No hay productos</p>

  return products.map(({ id, ...product }) => (
    <ProductListItem
      key={id}
      product={product}
    />
  ))
}
