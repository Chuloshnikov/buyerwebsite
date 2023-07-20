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
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut, SessionContext } from "next-auth/react";
import { addUser, removeUser } from '../redux/buyerSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.buyer.productData);
  const userInfo = useSelector((state: any) => state.buyer.userInfo);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMessagePanel, setOpenMessagePanel] = useState(false);
  const menuRef = useRef(null);
  const { data: session } = useSession();


  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const toogleMessagePanel = () => {
    setOpenMessagePanel(!openMessagePanel);
  }

  useEffect(() => {
    if(session) {
      dispatch(
        addUser({
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
      }))
    } else {
      dispatch(removeUser())
    }
  }, [session, dispatch]);

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
  }, []);


  return (
        <div className='w-full bg-white text-gray-600 px-4 sticky top-0 z-50'>
           <div className='max-w-container mx-auto flex md:justify-between xs:justify-evenly items-center border-b-[1px] border-b-gray-300'>
              <div className='flex items-center md:gap-3 xs:gap-1'>
                <div>
                  <AiOutlineMessage onClick={toogleMessagePanel} className='w-7 h-7 rounded-full hover:bg-orange-400 duration-300'/>
                  {openMessagePanel ? (
                  <div 
                  onClick={toogleMessagePanel}
                  className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10'>
                      <div className='z-50 absolute top-10 p-3 left-6 flex flex-col gap-2 border-[1px]
                   border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                    >
                      <Link onClick={toogleMessagePanel} href="/"><BsTelegram className='w-7 h-7 text-blue-400'/></Link>
                      <Link onClick={toogleMessagePanel} href="/"><BsWhatsapp className='w-7 h-7 text-green-500'/></Link>
                    </div>
                  </div>
                  ) : ''}
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
                <div className='felx flex-col gap-1'>
                  <div>
                      {/*login button*/}
                       {userInfo ? (
                       <button
                       onClick={() => signOut()}
                       className='text-green-700 flex flex-col items-center'>
                          <FaUserAlt className='text-[24px]'/>
                          <span className='font-medium text-xs xs:hidden mdl:inline'>Вийти</span>
                      </button>
                        ) : (
                          <Link
                          href={'/login'}
                          className='text-red-500 flex flex-col items-center'>
                            <FaUserAlt className='text-[24px]'/>
                            <span className='font-medium text-xs xs:hidden mdl:inline'>Увійти</span>
                          </Link>
                        )
                        } 
                  </div>
                </div>
                {/* Bascet Start */}
                <div className='mdl:ml-[30px] xs:ml-[5px] pt-3'>
                {
                  productData.length !== 0 ? (
                    <Link  href="/cart" passHref>
                    <SlBasket className='w-7 h-7'/>
                    <span className='relative -top-7 left-4 w-4 h-4 bg-orange-400
                    text-white text-xs rounded-full
                    flex flex-col justify-center items-center z-1'
                    >
                      {productData.length > 0 ? productData.length : 0}
                    </span>
                  </Link>
                  ) : ("")
                } 
                  
                </div>
                {/* Bascet End */}
                <div onClick={toogleMenu}>
                  {openMenu === true ? <BiMenuAltRight className='w-7 h-7'/> : <BiMenu className='w-7 h-7'/>}
                </div>
                {openMenu ? 
                (
                <div 
                onClick={toogleMenu}
                className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-5'
                >
                      <div className='absolute z-10 top-20 right-5 p-4 flex flex-col gap-2 border-[1px]
                        border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                      >
                      <div className='flex w-full justify-end'>
                        <button onClick={toogleMenu} className='block'><AiOutlineClose className='w-5 h-5'/></button>
                      </div>
                      <nav className='p-10'>
                        <ul className='flex flex-col gap-3'>
                          <li onClick={toogleMenu}><Link href="/products">Каталог</Link></li>
                          <li onClick={toogleMenu}><Link href="/about">Про послуги</Link></li>
                          <li onClick={toogleMenu}>dfgdfgfg</li>
                          <li onClick={toogleMenu}><Link href="/faq">FAQ</Link></li>
                          {!userInfo && (<li onClick={toogleMenu}><Link href="/login">Увійти</Link></li>)}
                          {userInfo && (<li onClick={toogleMenu}><Link href="/profile">Мій профіль</Link></li>)}
                          {
                          session && (
                          <li onClick={toogleMenu}>
                            <span 
                            className='cursor-pointer'
                              onClick={() => signOut()}
                              >
                                Вийти
                            </span>
                          </li>)
                          }
                        </ul>
                      </nav>
                  </div>
                </div>
                ) : ''}
              </div>
           </div>
        </div>
  )
}

export default Navbar;