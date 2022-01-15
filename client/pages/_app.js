import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import { fetcher } from 'utils/fetcher'

export default function MyApp ({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}
