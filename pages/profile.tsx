import React, { useState, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Profile(){

  const { data: session } = useSession();


  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/buyerfavicon.ico" />
      </Head>
      <section>
        Profile
      </section>
    </>
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

