import Head from 'next/head'
import Navbar from '@/components/navbar'

export default function Layout ({ children, title }) {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Navbar>
        {children}
      </Navbar>
    </div>
  )
}
