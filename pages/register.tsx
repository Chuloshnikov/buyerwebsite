import React, { useState } from 'react';
import CredentialsForm from '../components/CredentialsForm';
import Head from 'next/head';
import Link from 'next/link';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi2';

import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const [show, setShow] = useState({password: false, cpassword: false});
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validate: register_validate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
        .then(res => res.json())
        .then((data) => {
            if(data) router.push('http://localhost:3000')
        })
    }

  return (
        <CredentialsForm>
            <Head>
                <title>Регістрація</title>
                <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/buyerfavicon.ico" />
            </Head>
            <section className='mx-auto flex flex-col'>
                <form 
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-2 mt-5'>
                <div className='flex justify-center'>
                        <input
                        className={`border-b-[2px] border-b-gray-400 text-gray-700 
                        ${formik.errors.name ? 'border-b-rose-600' : ''}`}
                        type="text"
                        name="name"
                        placeholder='Name'
                        {...formik.getFieldProps('name')}
                        />
                        <HiOutlineUser
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                        className={`border-b-[2px] border-b-gray-400 text-gray-700 
                        ${formik.errors.email ? 'border-b-rose-600' : ''}`}
                        type="email"
                        name="email"
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                        />
                        <HiAtSymbol
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                        className={`border-b-[2px] border-b-gray-400 text-gray-700 
                        ${formik.errors.password ? 'border-b-rose-600' : ''}`}
                        type={`${show.password ? "text" : "password"}`}
                        name="password"
                        placeholder='Password'
                        {...formik.getFieldProps('password')}
                        />
                        <HiFingerPrint
                        onClick={() => setShow({ ...show, password: !show.password })}
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                        className={`border-b-[2px] border-b-gray-400 text-gray-700 
                        ${formik.errors.cpassword ? 'border-b-rose-600' : ''}`}
                        type={`${show.cpassword ? "text" : "password"}`}
                        name="password"
                        placeholder='Confirm Password'
                        {...formik.getFieldProps('cpassword')}
                        />
                        <HiFingerPrint
                        onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <button className='bg-green-600 text-white 
                        font-semibold text-center mx-12 rounded-md py-1
                        hover:scale-105 duration-300'
                        >
                            Регістрація
                        </button>
                    </div>
                </form>
                <p className='text-xs font-medium mt-4 mx-4 text-gray-400'>
                    Реєструючись, ви погоджуєтеся з умовами{' '}
                     <Link className='text-blue-400 hover:text-red-400 duration-300' href="/privacy">
                        положення про обробку і захист персональних даних
                    </Link>
                       {' '}та{' '}
                     <Link className='text-blue-400 hover:text-red-400 duration-300' href="/legal_terms">
                        угодою користувача
                        </Link>
                </p>
                <p className='mt-4 text-xs font-semibold text-center text-gray-400'>
                    Ви вже зареэструвались?{' '}
                    <Link className='text-blue-400 hover:text-red-400 duration-300' href={'/login'}>
                        Логін
                    </Link>
                </p>
            </section>
        </CredentialsForm>
  )
}

export default Register;