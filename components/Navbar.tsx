import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import logo from "../assets/images/logo.png" ;
import { AiOutlineMessage, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import Link from "next/link";
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { AiOutlinePhone, AiOutlineClose } from 'react-icons/ai';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [openMessagePanel, setOpenMessagePanel] = useState(false);
  const menuRef = useRef(null);


  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const toogleMessagePanel = () => {
    setOpenMessagePanel(!openMessagePanel);
  }

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
        setOpenMessagePanel(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [])

  return (
        <div className='w-full bg-white text-gray-600 px-4 sticky top-0 z-50'>
           <div className='max-w-container mx-auto flex md:justify-between xs:justify-evenly items-center border-b-[1px] border-b-gray-300'>
              <div className='flex items-center md:gap-3 xs:gap-1'>
                <div>
                  <AiOutlineMessage onClick={toogleMessagePanel} className='w-7 h-7 rounded-full hover:bg-orange-400 duration-300'/>
                  {openMessagePanel ? (
                  <div className='absolute top-15 p-3 left-6 flex flex-col gap-2 border-[1px]
                   border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                   >
                    <a onClick={toogleMessagePanel} href="/"><BsTelegram className='w-7 h-7 text-blue-400'/></a>
                    <a onClick={toogleMessagePanel} href="/"><BsWhatsapp className='w-7 h-7 text-green-500'/></a>
                    <a></a>
                  </div>)
                   : ''}
                </div>
                <a className='border:none xs:hidden md:block md:text-base' href="tel:+38-093-996-10-87">+38 093 996 10 87</a>
                <a className='xs:block md:hidden' href="tel:+38-093-996-10-87"><AiOutlinePhone className='w-7 h-7'/></a>
              </div>
              <div className='flex items-center gap-2 md:ml-[30px] xs:ml-0 text-3xl text-orange-400 py-4'>
                <p className='xs:hidden mdl:block'>Buyer</p>
                <Link href="/" passHref>
                  <Image className='w-10 h-10 rounded-full border-[3px] border-orange-400' src={logo} alt="logo"/>
                </Link>
                <p className='xs:hidden mdl:block'>Anastasiia</p>
              </div>
              <div className='py-2 flex gap-3 md:gap-1 items-center'>
                <a href="https://www.instagram.com/anastasia_zahorodnia_work" 
                className='rounded-full mdl:p-2 xs:p-0 hover:bg-orange-400 duration-300'
                target="_blank"
                >
                  <AiOutlineInstagram className='mdl:w-5 mdl:h-5 xs:w-7 xs:h-7'/>
                </a>
                <a href="https://www.facebook.com/anastasia.zahorodnia.work" 
                className='rounded-full mdl:p-2 xs:p-0 hover:bg-orange-400 duration-300'
                target="_blank"
                >
                  <FaFacebookF className='mdl:w-5 mdl:h-5 xs:w-7 xs:h-7'/>
                </a>
                {/* Bascet Start */}
                <div className='mdl:ml-[30px] xs:ml-[5px] pt-3'>
                  <Link  href="/cart" passHref>
                    <SlBasket className='w-7 h-7'/>
                    <span className='relative -top-7 left-4 w-4 h-4 bg-orange-400
                    text-white text-xs rounded-full
                    flex flex-col justify-center items-center z-10'
                    >
                      0
                    </span>
                  </Link>
                </div>
                {/* Bascet End */}
                <div onClick={toogleMenu}>
                  {openMenu === true ? <BiMenuAltRight className='w-7 h-7'/> : <BiMenu className='w-7 h-7'/>}
                </div>
                {openMenu ? 
                (
                <div className='absolute top-20 right-5 p-4 flex flex-col gap-2 border-[1px]
                 border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                 >
                    <div className='flex w-full justify-end'>
                      <button onClick={toogleMenu} className='block'><AiOutlineClose className='w-5 h-5'/></button>
                    </div>
                    <nav className='p-10'>
                      <ul className='flex flex-col gap-3'>
                        <li onClick={toogleMenu}><Link href="/products">Каталог</Link></li>
                        <li onClick={toogleMenu}>апвппапп</li>
                        <li onClick={toogleMenu}>dfgdfgfg</li>
                        <li onClick={toogleMenu}>dfgdfg</li>
                      </ul>
                    </nav>
                </div>) : ''}
              </div>
           </div>
        </div>
  )
}

export default Navbar;