import React from 'react';
import CredentialsForm from '../components/CredentialsForm';
import Head from 'next/head';
import Link from 'next/link';

const Register = () => {
  return (
        <CredentialsForm>
            <Head>
                <title>Регістрація</title>
                <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/buyerfavicon.ico" />
            </Head>
            <section className='mx-auto flex flex-col'>
                <h1>Register</h1>
            </section>
        </CredentialsForm>
  )
}

export default Register;