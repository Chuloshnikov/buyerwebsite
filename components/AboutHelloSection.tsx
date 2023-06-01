"use client"
import React from 'react';
import Image from 'next/image';
import logo from "../assets/images/logo.png" ;
import { GiEuropeanFlag } from "react-icons/gi";
import usaFlag from "../assets/icons/usa.svg";
import euFlag from "../assets/icons/Europe.svg";
import planet from "../assets/icons/planet.svg";

const AboutHelloSection = () => {
  return (
    <>
        <div className='flex gap-2 text-center justify-center items-center'>
            <div>
              <div className='-z-10 w-[200px] h-[200px] absolute top-[30%] left-[34%] opacity-70'>
                  <Image src={planet} className="w-full h-full"/>
              </div>
              <div className='z-50'>
                <h1 className='flex flex-col text-3xl font-semibold text-gray-600'><span>Привіт, я Анастасія</span><span>твій кращий байєр</span></h1>
                <p className='text-lg font-semibold text-gray-600'>Доставка із США та Эвропи</p>
                <div className='flex justify-center items-center gap-2'>
                  <div className='w-[71px] h-10'>
                    <Image src={usaFlag} className="w-full h-full"/>
                  </div>
                  <div className='w-[70px] h-10'>
                    <Image src={euFlag} className="w-full h-full"/>
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-full border-8 border-orange-400 overflow-hidden'>
                <Image className='' src={logo} width={250} height={350}/>
            </div>
        </div>
        
    </>
  )
}

export default AboutHelloSection;