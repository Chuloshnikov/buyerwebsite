import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import availableBox from '../../assets/icons/availableBox.svg';
import basketImg from "../../assets/icons/basketImg.svg";
import { motion } from 'framer-motion';


const AboutAvailableSection = () => {
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
        <div className='m-auto flex gap-10 text-gray-800'>
          <motion.div 
          ref={leftColumnRef}
          variants={leftColumn}
          initial="hidden"
          animate={leftColumnVisible ? "visible" : "hidden"}
          className='container'>
            <div className='w-[300px] mt-10'>
                <div>
                      <Image src={availableBox} width={150} className="absolute mt-5 ml-20 opacity-10"/>
                  </div>
                  <div className='w-full flex flex-col gap-10 mt-5'>
                    <div className='flex flex-col gap-4 leading-5 text-lg font-semibold'>
                      <p>Tовари в наявності можуть бути у вас вже через один чи два робочих дні.</p>
                      <p>Відправка відбувається у день оплати або на наступний робочий день.</p>
                    </div>
                    <Link 
                        className='bg-orange-400 text-white font-semibold
                        rounded-lg w-full block py-2 hover:bg-orange-500 duration-300 text-center items-center'
                        href="/products"
                        >
                          Товари в наявності
                    </Link>
                  </div>
            </div>
          </motion.div>
          <motion.div
          className='container'
          ref={rightColumnRef}
          variants={rightColumn}
          initial="hidden"
          animate={rightColumnVisible ? "visible" : "hidden"}
          >
              <Image src={basketImg} width={200}/>
          </motion.div>
        </div>
    </>
  )
}

export default AboutAvailableSection;