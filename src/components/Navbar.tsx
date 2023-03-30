import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import logo from "../assets/images/logo.png" ;
import Link from "next/link";
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { BiMenu } from 'react-icons/bi';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [openMassagePanel, setOpenMassagePanel] = useState(false);

  return (
        <div className='w-full bg-white text-gray-600 px-4'>
           <div className='max-w-container mx-auto flex md:justify-between xs:justify-evenly items-center border-b-[1px] border-b-gray-300'>
              <div className='flex items-center md:gap-3 xs:gap-1'>
                <div>
                  <AiOutlineMessage className='w-7 h-7 rounded-full hover:bg-orange-400 duration-300'/>
                </div>
                <a className='border:none xs:hidden md:text-base' href="tel:+38-093-996-10-87">+38 093 996 10 87</a>
                <a className='xs:block' href="tel:+38-093-996-10-87"><AiOutlinePhone className='w-7 h-7'/></a>
              </div>
              <div className='flex items-center gap-2 md:ml-[30px] xs:ml-0 text-3xl text-orange-400 py-4'>
                <p className='xs:hidden mdl:block'>Buyer</p>
                <Image className='w-10 h-10 rounded-full border-[3px] border-orange-400' src={logo} alt="logo"/>
                <p className='xs:hidden mdl:block'>Anastasia</p>
              </div>
              <div className='py-2 flex gap-3 md:gap-1 items-center'>
                <a href="https://www.instagram.com/anastasia_zahorodnia_work" 
                className='rounded-full p-2 xs:p-0 hover:bg-orange-400 duration-300'
                >
                  <AiOutlineInstagram className='md:w-5 md:h-5 xs:w-7 xs:h-7'/>
                </a>
                <a href="https://www.facebook.com/anastasia.zahorodnia.work" 
                className='rounded-full p-2 xs:p-0 hover:bg-orange-400 duration-300'
                >
                  <FaFacebookF className='w-5 h-5'/>
                </a>
                <SlBasket className='w-5 h-5 mdl:ml-[30px] xs:ml-[5px]'/>
                <div onClick={() => setOpenMenu(!openMenu)}>
                  {openMenu === true ? <BiMenuAltRight className='w-7 h-7'/> : <BiMenu className='w-7 h-7'/>}
                </div>
                
              </div>
           </div>
        </div>
  )
}

export default Navbar;