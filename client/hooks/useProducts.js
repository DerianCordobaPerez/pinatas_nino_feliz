import useSWR from 'swr'
import { getKeyApiProducts } from 'constants/products'

export const useProducts = ({ slug }) => {
  const { key } = getKeyApiProducts(slug)
  const { data, error } = useSWR(key)

  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  }
}
