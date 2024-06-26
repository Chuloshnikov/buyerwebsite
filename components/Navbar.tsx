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
import { motion } from 'framer-motion';

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
           <div className='max-w-container mx-auto flex justify-between items-center border-b-[1px] border-b-gray-300'>
              <div className='flex items-center md:gap-3 xs:gap-1'>
                <div>
                    <div 
                      className='xs:block mdl:hidden'
                      onClick={toogleMenu}>
                        {openMenu === true ? <BiMenuAltRight className='w-7 h-7'/> : <BiMenu className='w-7 h-7'/>}
                      </div>
                      {openMenu ? 
                      (
                      <div 
                      onClick={toogleMenu}
                      className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-5 md:hidden'
                      >
                        <div
                        className='absolute z-10 right-0 p-8 w-[50%] h-[50%] flex flex-col gap-2 border-[1px]
                              border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                            >
                            <div className='flex w-full justify-end'>
                              <button onClick={toogleMenu} className='block'><AiOutlineClose className='w-5 h-5'/></button>
                            </div>
                            <nav className='p-10'>
                              <ul className='flex flex-col gap-3'>
                                <li onClick={toogleMenu}><Link href="/products">Каталог</Link></li>
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
                {/* messages */}
                <div className='absolute top-[830%] right-[10%]'>
                  <motion.div
                  initial={{scale: 1}}
                  animate={{ scale: 1.2}}
                  transition={{repeat: Infinity, duration: 2}}
                  className="p-1 bg-blue-500 rounded-full shadow-lg"
                  >
                      <AiOutlineMessage onClick={toogleMessagePanel} className='w-10 h-10 text-white rounded-full duration-300'/>
                  </motion.div>
                  {openMessagePanel ? (
                  <div 
                  onClick={toogleMessagePanel}
                  className='absolute top-0 left-0 z-10'>
                      <div className='z-50 absolute -top-6 p-3 -left-16 flex flex-col gap-2 border-[1px]
                   border-gray-300 items-center bg-white rounded-md shadow-bannerShadow'
                    >
                      <Link 
                      onClick={toogleMessagePanel} 
                      className="flex gap-1"
                      href="https://t.me/AnastasiaZahorodnia">
                        <BsTelegram className='w-7 h-7 text-blue-400'/>
                        <span 
                        className='text-blue-400 font-semibold'>
                          Telegram
                        </span>
                      </Link>
                      <Link 
                      onClick={toogleMessagePanel} 
                      className="flex gap-1"
                      href="https://wa.me/380939961087">
                        <BsWhatsapp className='w-7 h-7 text-green-500'/> 
                        <span
                        className='text-green-500 font-semibold'
                        >
                          WhatsApp
                        </span>
                      </Link>
                    </div>
                  </div>
                  ) : ''}
                </div>
                {/* phone */}
                <a className='border:none xs:hidden lg:block md:text-base' href="tel:+38-093-996-10-87">+38 093 996 10 87</a>
                <a className='xs:block absolute top-[740%] right-[9.9%]' href="tel:+38-093-996-10-87">
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }} 
                    animate={{ rotate: [0, 30, -30, 0], scale: 1.1 }}
                    transition={{repeat: Infinity, duration: 0.8}}
                    className="p-1 rounded-full bg-green-500 shadow-lg"
                    >
                      <AiOutlinePhone className='w-11 h-11 text-white'/>
                  </motion.div>
                  </a>
              </div>
              <div className=''>
                <ul className='flex gap-7 justify-center items-center'>
                  <li
                  className='xs:hidden mdl:block'
                  >
                    <Link
                    className='font-semibold hover:border-orange-500 hover:border-b-2 my-4'
                    href="/products">Каталог</Link>
                  </li>
                  <li 
                  className='flex items-center gap-2 xs:ml-0 text-3xl text-orange-400'
                  >
                    <p className='xs:hidden mdl:block'>Buyer</p>
                      <Link
                      className='font-semibold hover:border-orange-500 my-4'
                      href="/" passHref>
                        <Image className='w-10 h-10 rounded-full border-[3px] border-orange-400' src={logo} alt="logo"/>
                      </Link>
                    <p className='xs:hidden mdl:block'>Anastasiia</p>
                  </li>
                  <li className='xs:hidden mdl:block'>
                    <Link
                    className='font-semibold hover:border-orange-500 hover:border-b-2 my-4'
                    href="/faq">FAQ</Link>
                  </li>
                  <li className='font-semibold my-4 xs:hidden mdl:block'>
                    {userInfo && (
                    <li onClick={toogleMenu}>
                        <Link 
                        className='font-semibold hover:border-orange-500 hover:border-b-2 my-4'
                        href="/profile">
                          Мій профіль
                        </Link>
                      </li>
                      )}  
                  </li>
                </ul>
              </div>
              <div className='py-2 flex gap-3 md:gap-1 items-center'>
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
                  ) : 
                  ("")
                } 
                  
                </div>
                {/* Bascet End */}
              </div>
           </div>
        </div>
  )
}

export default Navbar;