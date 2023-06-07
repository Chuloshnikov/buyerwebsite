import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';

export default function Payment() {
  const router = useRouter();
  
  const {
    query: { productData, totalAmt, userInfo }
  } = router;

  const props = {
    productData, 
    totalAmt, 
    userInfo
  }

  return (
    <div>
      {props.totalAmt}
      {props.productData}
      {JSON.stringify(userInfo)}
    </div>
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
  
  