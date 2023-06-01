import React, { useEffect } from 'react';
import { GiCommercialAirplane, GiEarthAmerica, GiPayMoney } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCalendarCheck, FaHandshake, FaSuitcase } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';


const AboutInfoSection = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 1 }
    }
  };

  const divVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start('visible');
    }, 1000);

    return () => clearTimeout(timer);
  }, [controls]);
  
  return (
    <>
      <motion.div 
        className="flex-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='flex gap-4 text-center 
        justify-center text-lg text-gray-800 font-semibold'
      >
        <motion.div 
          className="box"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }} // Затримка 0.3 секунди
          className='flex flex-col gap-4 py-8 px-4 
          shadow-bannerShadow min-w-[250px]
          hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <FaHandshake className='w-10 h-10'/>
            <FaCalendarCheck className='w-8 h-8'/>
          </div>
          <span>Виконую ваші замовлення</span>
          <span>З вами з 2012 року</span>
        </motion.div>
        <motion.div 
          className="box"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }} // Затримка 0.6 секунди
          className='flex flex-col gap-4 py-8 
          px-4 shadow-bannerShadow min-w-[250px]
          hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <BsFillBoxSeamFill className='w-8 h-8'/>
            <GiEarthAmerica className='w-8 h-8'/>
            <GiCommercialAirplane className='w-8 h-8'/>
          </div>
          <span className='text-2xl font-bold'>2000+</span>
          <span>Більше 2000 замовлень</span>
        </motion.div>
        <motion.div 
          className="box"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }} // Затримка 0.9 секунди
          className='flex flex-col gap-4 py-8 px-4 
          shadow-bannerShadow min-w-[250px]
          hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <FaSuitcase className='w-8 h-8'/>
            <GiPayMoney className='w-10 h-10'/>
          </div>
          <span>Працюю як фоп</span> 
          <span>Сплачую податки</span>
        </motion.div>
      </motion.div>
    </>
  )
}

export default AboutInfoSection;