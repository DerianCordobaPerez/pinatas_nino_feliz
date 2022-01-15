import useSWR from 'swr'
import { API_PRODUCTS } from 'constants/products'

export const useProducts = () => {
  const { data, error } = useSWR(API_PRODUCTS)

  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  }
}
