import Layout from 'components/layout'
import { API_PRODUCTS } from 'constants/products'
import { Box } from '@chakra-ui/react'

export default function Home ({ data }) {
  return (
    <Layout title="Home">
      <Box padding='4' maxW='3xl'>
        <h1>Home</h1>
        {JSON.stringify(data)}
      </Box>
    </Layout>
  )
}

export async function getStaticProps () {
  const response = await fetch(`${API_PRODUCTS}`)
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
