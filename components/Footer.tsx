import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiVisaLine, RiMastercardFill } from 'react-icons/ri';
import logo from "../assets/images/logo.png" ;
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full bg-orange-400 text-white px-4 pt-12 pb-16 flex xs:justify-center sm:justify-between'>
        <div className='flex items-center md:gap-2 xs:gap-1'>
            <a className='border:none xs:hidden lg:block md:text-base' href="tel:+38-093-996-10-87">+38 093 996 10 87</a>
            <a className='xs:block md:hidden' href="tel:+38-093-996-10-87"><AiOutlinePhone className=' text-gray-600 w-7 h-7'/></a>
            <a href="https://www.instagram.com/anastasia_zahorodnia_work" 
                className='rounded-full mdl:p-2 xs:p-0 hover:bg-white duration-300'
                target="_blank"
                >
                  <AiOutlineInstagram className='text-gray-600 mdl:w-5 mdl:h-5 xs:w-7 xs:h-7'/>
                </a>
                <a href="https://www.facebook.com/anastasia.zahorodnia.work" 
                className='rounded-full mdl:p-2 xs:p-0 hover:bg-white duration-300'
                target="_blank"
                >
                  <FaFacebookF className='text-gray-600 mdl:w-5 mdl:h-5 xs:w-7 xs:h-7'/>
                </a>
        </div>
        <div>
          <div className='flex items-center gap-2 md:ml-[30px] xs:ml-0 text-3xl text-orange-400 py-4'>
                <p className='text-white xs:hidden mdl:block'>Buyer</p>
                <Link href="/" passHref>
                  <Image className='w-10 h-10 rounded-full border-[3px] border-orange-700' src={logo} alt="logo"/>
                </Link>
                <p className='text-white xs:hidden mdl:block'>Anastasiia</p>
            </div>
            <ol className='xs:hidden lg:flex items-center gap-2 text-xs'>
                <li>
                  <Link href="/about" passHref className='hover:scale-105 hover:underline duration-300'>Про послуги</Link>
                </li>
                <li>
                  <div>|</div>
                </li>
                <li>
                  <Link href="/legal_terms" passHref className='hover:scale-105 hover:underline duration-300'>Умови використання сайту</Link>
                </li>
                <li>
                  <div>|</div>
                </li>
                <li>
                  <Link href="/faq" passHref className='hover:scale-105 hover:underline duration-300'>Запитання та FAQ</Link>
                </li>
            </ol>
        </div>
        <div className='flex items-center gap-2 xs:hidden sm:flex'>
          <RiVisaLine className='w-20 h-20'/>
          <RiMastercardFill className='w-20 h-20'/>
        </div>
    </div>
  )
}

export default Footer;