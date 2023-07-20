import React from 'react';
import Image from 'next/image';
import logo from "../../assets/images/logo.png";
import usaFlag from "../../assets/icons/usa.svg";
import euFlag from "../../assets/icons/Europe.svg";
import planet from "../../assets/icons/planet.svg";
import { motion } from 'framer-motion';

const AboutHelloSection = () => {


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


  return (
    <>
        <div className='xs:mx-6 xs:flex-col md:flex-row flex gap-2 text-center justify-center items-center'>
          <div>
            <motion.div
              className="container"
              variants={leftColumn}
              initial="hidden"
              animate="visible"
            >
              <div className='-z-10 rounded-full shadow-bannerShadow w-[200px] h-[200px] absolute top-[30%] left-[14%] opacity-50'>
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
            </motion.div>
          </div>
          <div>
            <motion.div 
            className="container"
            variants={rightColumn}
            initial="hidden"
            animate="visible"
            className='rounded-full shadow-bannerShadow border-8 border-orange-400 overflow-hidden'>
                <Image src={logo} width={250} height={350}/>
            </motion.div>
          </div>
        </div>
        
    </>
  )
}

export default AboutHelloSection;