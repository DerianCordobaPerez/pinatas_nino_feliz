import { useRouter } from 'next/router'

export default function Slug () {
  const { isFallback } = useRouter()

  return isFallback
    ? (
      <div>
        Loading...
      </div>
    )
    : (
      <div>
        Product
      </div>
    )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug
    }
  }
}
