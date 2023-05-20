import React, { useState } from 'react';
import CredentialsForm from '../components/CredentialsForm';
import Head from 'next/head';
import Link from 'next/link';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi2';

import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';

const Register = () => {
    const [show, setShow] = useState({password: false, cpassword: false});
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validate: register_validate,
        onSubmit
    })

    async function onSubmit(values) {
        console.log(values);
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
            <h1>Регістрація</h1>
                <form 
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-2 mt-5'>
                <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
                        type="text"
                        name="Username"
                        placeholder='Username'
                        {...formik.getFieldProps('username')}
                        />
                        <HiOutlineUser
                        size={20} 
                        className="text-gray-400 -ml-6 mt-1"
                        />
                    </div>
                    {formik.errors.username && formik.touched.username ? 
                    <span 
                        className='text-xs text-rose-500'>
                            {formik.errors.username}
                    </span> : <></>}
                    <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
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
                    {formik.errors.email && formik.touched.email ? 
                    <span 
                        className='text-xs text-rose-500'>
                            {formik.errors.email}
                    </span> : <></>}
                    <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
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
                    {formik.errors.password && formik.touched.password ? 
                    <span 
                        className='text-xs text-rose-500'
                    >
                        {formik.errors.password}
                    </span> : <></>}
                    <div className='flex justify-center'>
                        <input
                        className='border-b-[1px] border-b-gray-400 text-gray-700'
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
                    {formik.errors.cpassword && formik.touched.cpassword ? 
                    <span 
                        className='text-xs text-rose-500'
                    >
                        {formik.errors.cpassword}
                    </span> : <></>}
                    <div className='flex flex-col gap-2 mt-2'>
                        <button className='bg-green-600 text-white 
                        font-semibold text-center mx-12 rounded-md py-1
                        hover:scale-105 duration-300'
                        >
                            Реєстрація
                        </button>
                    </div>
                </form>
                <p className='mt-10 text-xs font-semibold text-center text-gray-400'>
                    Ви вже зареэструвались?{' '}
                    <Link className='text-blue-600 hover:underline duration-200' href={'/login'}>
                        Логін
                    </Link>
                </p>
            </section>
        </CredentialsForm>
  )
}

export default Register;