import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Image src="/vercel.svg" width={100} height={50} alt="logo" />
        <Link href={'/'}>←Back to Home</Link>
      </h2>
    </Layout>
  )
}
