import React, { useEffect } from 'react';
import { GiCommercialAirplane, GiEarthAmerica, GiPayMoney } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCalendarCheck, FaHandshake, FaSuitcase } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

const AboutInfoSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible1");
      await controls.start("visible2");
      await controls.start("visible3");
    };

    sequence();
  }, []);

  const column1 = {
    hidden: { x: '-100%', opacity: 0 },
    visible1: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.3 }
    }
  };

  const column2 = {
    hidden: { x: '-200%', opacity: 0 },
    visible2: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut", delay: 0.6 }
    }
  };

  const column3 = {
    hidden: { x: '-300%', opacity: 0 },
    visible3: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.1, ease: "easeInOut", delay: 0.9 }
    }
  };

  return (
    <>
      <div
        className='xs:flex-col md:flex-row flex gap-4 text-center justify-center text-lg text-gray-800 font-semibold'
      >
        <motion.div
          className="box"
          variants={column1}
          initial="hidden"
          animate={controls}
          className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px] hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <FaHandshake className='w-10 h-10' />
            <FaCalendarCheck className='w-8 h-8' />
          </div>
          <span>Виконую ваші замовлення</span>
          <span>З вами з 2012 року</span>
        </motion.div>
        <motion.div
          className="box"
          variants={column2}
          initial="hidden"
          animate={controls}
          className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px] hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <BsFillBoxSeamFill className='w-8 h-8' />
            <GiEarthAmerica className='w-8 h-8' />
            <GiCommercialAirplane className='w-8 h-8' />
          </div>
          <span className='text-2xl font-bold'>2000+</span>
          <span>Більше 2000 замовлень</span>
        </motion.div>
        <motion.div
          className="box"
          variants={column3}
          initial="hidden"
          animate={controls}
          className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px] hover:bg-orange-400 hover:text-white duration-300'
        >
          <div className='flex gap-2 justify-center'>
            <FaSuitcase className='w-8 h-8' />
            <GiPayMoney className='w-10 h-10' />
          </div>
          <span>Працюю як фоп</span>
          <span>Сплачую податки</span>
        </motion.div>
      </div>
    </>
  )
}

export default AboutInfoSection;