import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import quietImg from '../../assets/icons/quiet.svg';
import telegramImg from "../../assets/icons/Telegram.svg";
import instagramLogo from "../../assets/icons/InstagramLogo.svg";
import { motion } from 'framer-motion';


const AboutClosedChannelSection = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightColumnVisible, setRightColumnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        leftColumnRef.current &&
        leftColumnRef.current.getBoundingClientRect().top <= window.innerHeight &&
        leftColumnRef.current.getBoundingClientRect().bottom >= 0
      ) {
        setLeftColumnVisible(true);
      }
      if (
        rightColumnRef.current &&
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
    <>
        <div className='xs:flex-col md:flex-row mx-auto flex gap-10 text-gray-800'>
          <motion.div 
          ref={leftColumnRef}
          variants={leftColumn}
          initial="hidden"
          animate={leftColumnVisible ? "visible" : "hidden"}
          className='container items-center flex justify-center'>
            <Image src={telegramImg} width={200} alt="telegramImg"/>
          </motion.div>
          <motion.div
          className='container flex justify-center items-center text-center'
          ref={rightColumnRef}
          variants={rightColumn}
          initial="hidden"
          animate={rightColumnVisible ? "visible" : "hidden"}
          >
              <div className='w-[300px]'>
                <div>
                      <Image src={quietImg} width={100} className="absolute  ml-20 opacity-10" alt="quietImg"/>
                  </div>
                  <div className='w-full flex flex-col gap-6 mt-5 items-center'>
                    <div className='flex flex-col gap-2 leading-5 text-base font-semibold'>
                      <p>Закритий Телеграм канал з ранніми доступами до розпродажів</p>
                      <p>Щоб потрапити до каналу пиши у дірект Instagram сторінки:</p>
                    </div>
                    <Link 
                        className='md:-ml-12 xs:ml-0'
                        href="https://www.instagram.com/anastasia_zahorodnia_work/"
                        >
                          <Image src={instagramLogo} width={50} height={50} alt="instagramLogo"/>
                    </Link>
                  </div>
            </div>
          </motion.div>
        </div>
    </>
  )
}

export default AboutClosedChannelSection;