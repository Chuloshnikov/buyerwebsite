import React from 'react';
import CredentialsForm from '../components/CredentialsForm';
import Link from 'next/link';
import Head from 'next/head';

const Login = () => {
  return (
        <CredentialsForm>
            <Head>
                <title>Log in</title>
                <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/buyerfavicon.ico" />
            </Head>
            <section className='mx-auto flex flex-col'>
                <div>
                    <Link href="login">To Login</Link>
                    <Link href="register">To Register</Link>
                </div>
                <h1>Login</h1>
                <form className='flex flex-col gap-2 mt-5'>
                    <div className='input-item'>
                        <input
                        className='border-b-[1px] border-b-gray-400'
                        type="email"
                        name="email"
                        placeholder='Email'
                        >
                        </input>
                    </div>
                    <div className='input-item'>
                        <input
                        className='border-b-[1px] border-b-gray-400'
                        type="password"
                        name="password"
                        placeholder='Password'
                        >
                        </input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button>
                            Log in
                        </button>
                        <button>
                            Sign in with Google
                        </button>
                        <button>
                            Sign in with Instagram
                        </button>
                        <button>
                            Sign in with Facebook
                        </button>
                    </div>
                </form>
            </section>
        </CredentialsForm>
  )
}

export default Login;