"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plane from "../assets/icons/plane.svg";
import box from "../assets/icons/box.svg";
import { motion } from 'framer-motion';

const AboutOrderingSection = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightColumnVisible, setRightColumnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        leftColumnRef.current.getBoundingClientRect().top <= window.innerHeight &&
        leftColumnRef.current.getBoundingClientRect().bottom >= 0
      ) {
        setLeftColumnVisible(true);
      }
      if (
        rightColumnRef.current.getBoundingClientRect().top <= window.innerHeight &&
        rightColumnRef.current.getBoundingClientRect().bottom >= 0
      ) {
        setRightColumnVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftColumn = {
    hidden: { 
      x: '-100%',
      opacity: 0
    },
    visible: { 
      x: '0%',
      opacity: 1,
      transition: { 
        duration: 1
      }
    },
  };

  const rightColumn = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: '0%',
      opacity: 1,
      transition: { 
        duration: 1
      }
    },
  };

  return (
    <div className='m-auto flex gap-4 text-gray-800'>
      <motion.div 
        className='container'
        ref={leftColumnRef}
        variants={leftColumn}
        initial="hidden"
        animate={leftColumnVisible ? "visible" : "hidden"}
      >
        <div className='w-[300px]'>
            <Image src={plane}/>
        </div>
        
      </motion.div>
      <motion.div
        className='container'
        ref={rightColumnRef}
        variants={rightColumn}
        initial="hidden"
        animate={rightColumnVisible ? "visible" : "hidden"}
      >
        <div className='w-[300px]'>
            <div>
              <Image src={box} className="absolute ml-10 mt-2 opacity-20"/>
            </div>
            <div>
              <div className='text-base font-semibold leading-5'>
                <p>Для оформлення замовлення необхідно написати</p>
                 <Link
                 className='text-orange-500 absolute top-[9%] right-[33%] ml-[4px] mr-[4px] duration-300 cursor-pointer'
                 href="https://www.instagram.com/anastasia_zahorodnia_work/"
                 >
                    сюди
                 </Link> 
                 <span>
                      у дірект та вказати посилання або фото товару, 
                      також колір, розмір та кількість. 
                 </span>
              </div>
              <p className='text-sm font-semibold'>
                Ви можете замовити додаткові послуги, такі як:
              </p>
              <ul className='text-sm font-semibold leading-5'>
                <li className='flex gap-1 items-center'>
                  <span className='bg-orange-500 h-[10px] w-[10px]'></span>
                  <span>фото товару</span>
                </li>
                <li className='flex gap-1 items-center'>
                  <span className='bg-orange-500 h-[10px] w-[10px]'></span>
                  <span>перевірка товару</span>
                </li>
                <li className='flex gap-1 items-center'>
                  <span className='bg-orange-500 h-[10px] w-[10px]'></span>
                  <span>додаткове пакування</span>
                </li>
              </ul>
              <p className='text-xs font-semibold mt-2'>Всі перераховані послуги оплачуються додатково.</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutOrderingSection;