import Card from 'components/card'

export default function ProductListItem ({ new: isNew, ...props }) {
  return (
    <Card
      isNew={isNew}
      {...props}
    />
  )
}
