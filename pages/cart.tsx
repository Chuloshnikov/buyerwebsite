import Head from 'next/head';
import CartPage from '../components/CartPage';

const cart = () => {
  return (
    <>
      <Head>
        <title>Кошик</title>
        <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/buyerfavicon.ico" />
      </Head>
      <main className='max-w-contentContainer m-auto'>
        <CartPage/>
      </main>
    </>
    
  )
}

export default cart;