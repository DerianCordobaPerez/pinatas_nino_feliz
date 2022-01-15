import Card from 'components/card'

export default function ProductListItem ({ name, price, images, isNew, numberReviews, rating }) {
  return (
    <Card
      name={name}
      price={price}
      imageUrl={images}
      isNew={isNew}
      numberReviews={numberReviews}
      rating={rating}
    />
  )
}
