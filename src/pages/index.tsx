import Head from 'next/head';
import { Inter } from 'next/font/google';
import Banner from '../components/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Buyer Anastasia</title>
        <meta name="description" content="Евій найкращий баєр" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/buyerfavicon.ico" />
      </Head>
      <main>
        <div className='max-w-contentContainer m-auto'>
            <Banner/>
        </div>
      </main>
    </>
  )
}
