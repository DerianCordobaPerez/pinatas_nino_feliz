import Loading from 'components/loading'
import ProductList from 'components/products/productList'
import { useProducts } from 'hooks/useProducts'

export default function ProductFeed () {
  const { products, isLoading } = useProducts({ slug: null })

  return (
    isLoading
      ? <Loading />
      : <ProductList products={products} />
  )
}
