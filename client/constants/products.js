export const API_PRODUCTS = process.env.API_PRODUCTS

export const getKeyApiProducts = (slug) => {
  return {
    key: slug ? `${API_PRODUCTS}/${slug}` : API_PRODUCTS
  }
}
