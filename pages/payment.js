import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';
import PaymentPage from "../components/PaymentPage";
import Head from 'next/head';

export default function Payment() {
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
        <PaymentPage amount={totalAmt}/>
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
  
  