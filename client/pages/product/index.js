import { useProducts } from 'hooks/useProducts'
import Layout from 'components/layout'
import Loading from 'components/loading'
import ProductList from 'components/products/productList'

export default function Products () {
  const { products, isLoading } = useProducts()

  if (isLoading) return <Loading />

  return (
    <Layout title='Productos'>
      <ProductList products={products} />
    </Layout>
  )
}
