import { useRouter } from 'next/router'
import Loading from 'components/loading'

export default function Slug () {
  const { isFallback } = useRouter()

  return isFallback
    ? <Loading />
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
