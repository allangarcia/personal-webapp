import type { NextPage } from 'next'
import Head from 'next/head'
import MainHero from '../components/hero'

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hi, this is Allan Garcia speaking!</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className="p-5 flex flex-col flex-shrink justify-center md:min-h-screen">
        <MainHero />
      </div>
    </div>
  )
}

export default Home
