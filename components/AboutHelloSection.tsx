"use client"
import React from 'react';
import Image from 'next/image';
import logo from "../assets/images/logo.png" ;

const AboutHelloSection = () => {
  return (
    <>
        <div className='flex gap-2 text-center justify-center items-center mt-8'>
            <div>
                <h1 className='flex flex-col text-3xl font-semibold text-gray-600'><span>Привіт, я Анастасія</span><span>твій кращий байєр</span></h1>
                <p className='text-lg font-semibold text-gray-600'>Доставка із США та Эвропи</p>
            </div>
            <div className='rounded-full border-8 border-orange-400 overflow-hidden'>
                <Image className='' src={logo} width={250} height={350}/>
            </div>
        </div>
        
    </>
  )
}

export default AboutHelloSection;