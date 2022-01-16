import Card from 'components/card'

export default function ProductListItem ({ name, price, images, numberReviews, rating, ...props }) {
  return (
    <Card
      name={name}
      price={price}
      imageUrl={images}
      isNew={props.new}
      numberReviews={numberReviews}
      rating={rating}
    />
  )
}
