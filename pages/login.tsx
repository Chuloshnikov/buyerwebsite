import React, { useState } from 'react';
import CredentialsForm from '../components/CredentialsForm';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import {
    googleLogo,
    facebookLogo,
    instagramLogo
} from '../assets/images/index';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import styles from '../styles/CredentialsForm.module.css';

const Login = () => {

    const [show, setShow] = useState(false);

  return (
        <CredentialsForm>
            <Head>
                <title>Log in</title>
                <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/buyerfavicon.ico" />
            </Head>
            <section className='mx-auto flex flex-col'>
                <h1>Реєстрація</h1>
                <form className='flex flex-col gap-2 mt-5'>
                    <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
                        type="email"
                        name="email"
                        placeholder='Email'
                        />
                        <HiAtSymbol 
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
                        type={`${show ? "text" : "password"}`}
                        name="password"
                        placeholder='Password'
                        />
                        <HiFingerPrint 
                        onClick={() => setShow(!show)}
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <button className='bg-green-600 text-white 
                        font-semibold text-center mx-12 rounded-md py-1
                        hover:scale-105 duration-300'
                        >
                            Реєстрація
                        </button>
                        <button 
                        className='text-gray-600 flex gap-1 items-center 
                        justify-center border-2 
                        py-1 mx-12 rounded-md hover:scale-105 duration-300'
                        >
                            <span>Реєстрація з Google</span>
                            <Image src={googleLogo} width={14} height={14}/>
                        </button>
                        <button 
                        className='text-gray-600 flex gap-1 items-center 
                        justify-center border-2
                        py-1 mx-12 rounded-md hover:scale-105 duration-300'
                        >
                            <span>Реєстрація з Instagram</span>
                            <Image src={instagramLogo} width={14} height={14}/>
                        </button>
                        <button 
                        className='text-gray-600 flex gap-1 items-center 
                        justify-center border-2
                        py-1 mx-12 rounded-md hover:scale-105 duration-300'
                        >
                            <span>Реєстрація з Facebook</span>
                            <Image src={facebookLogo} width={14} height={14}/>
                        </button>
                    </div>
                </form>
                <p className='mt-10 text-xs font-semibold text-center text-gray-400'>
                    Ви ще не зареєструвались?{' '}
                    <Link className='text-blue-600 hover:underline duration-200' href={'/register'}>
                        Реєстрація
                    </Link>
                </p>
            </section>
        </CredentialsForm>
  )
}

export default Login;