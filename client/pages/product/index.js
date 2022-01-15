import Layout from '@/components/layout'
import { useProducts } from 'hooks/useProducts'
import { Spinner } from '@chakra-ui/react'

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
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </Layout>
  )
}
