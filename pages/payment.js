import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';
import PaymentPage from "../components/PaymentPage";
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';



export default function Payment() {
  const productData = useSelector((state) => state.buyer.productData);
  const router = useRouter();
  
  const {
    query: { totalAmt }
  } = router;

    
  return (
      <>
        <Head>
            <title>Оплата</title>
            <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/buyerfavicon.ico" />
        </Head>
        <main>
          {!productData.length ? (
          <div className='text-center h-[500px] flex justify-center items-center'>
            <h2 className='text-red-400 font-bold text-2xl'>Для оформлення оплати треба обрати товар</h2>
          </div>
          )
           : (<PaymentPage amount={totalAmt}/>)
           }
        </main>
      </>    
    )
  }

  


export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if(!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  
    return {
      props: { session }
    } 
  }
  
  