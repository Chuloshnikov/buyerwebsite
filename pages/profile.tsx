import React from 'react';
import { getSession, useSession } from 'next-auth/react';

export default function Profile(){

  const { data: session } = useSession();


  return (
    <div>Profile</div>
  )
};

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

