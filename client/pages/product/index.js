import Layout from 'components/layout'
import { useProducts } from 'hooks/useProducts'
import { Spinner } from '@chakra-ui/react'
import ProductList from 'components/products/productList'

export default function Products () {
  const { products, isLoading } = useProducts()

  if (isLoading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  }

  return (
    <Layout title='Productos'>
      <ProductList products={products} />
    </Layout>
  )
}
