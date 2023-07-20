import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MdPayment, MdOutlinePayments } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import PropTypes from 'prop-types';

const AboutPaymentSection = ({ refProp }) => {
  const controls = useAnimation();


  useEffect(() => {
    const element = refProp.current;
    const onScroll = () => {
      if (isElementInViewport(refProp.current)) {
        const sequence = async () => {
          await controls.start("visible1");
          await controls.start("visible2");
          await controls.start("visible3");
        };

        sequence();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [controls]);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const column1 = {
    hidden: { x: '100%', opacity: 0 },
    visible1: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 }
    }
  };

  const column2 = {
    hidden: { x: '100%', opacity: 0 },
    visible2: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut", delay: 0.2 }
    }
  };

  const column3 = {
    hidden: { x: '100%', opacity: 0 },
    visible3: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.1, ease: "easeInOut", delay: 0.4 }
    }
  };

  return (
    <>
      <div className='xs:flex-col md:flex-row flex gap-4 text-center justify-center text-lg text-gray-800 font-semibold'>
        <motion.div
          variants={column1}
          initial="hidden"
          animate={controls}
          className={`box flex flex-col gap-4 py-8 px-4 shadow-bannerShadow max-w-[200px] 
          bg-orange-400 text-white hover:bg-white hover:text-gray-800 duration-300`}
          ref={refProp}
        >
          <div className='flex gap-2 justify-center'>
            <MdPayment className='w-10 h-10' />
          </div>
          <span>Оплачуй по повній предоплаті</span>
        </motion.div>
        <motion.div
          variants={column2}
          initial="hidden"
          animate={controls}
          className={`box flex flex-col gap-4 py-8 px-4 shadow-bannerShadow max-w-[200px] 
          bg-orange-400 text-white hover:bg-white hover:text-gray-800 duration-300`}
          ref={refProp}
        >
          <div className='flex gap-2 justify-center'>
            <MdOutlinePayments className='w-8 h-8' />
          </div>
          <span>Замовляй по частковій предоплаті</span>
        </motion.div>
        <motion.div
          variants={column3}
          initial="hidden"
          animate={controls}
          className={`box flex flex-col gap-4 py-8 px-4 shadow-bannerShadow max-w-[200px] bg-orange-400 text-white hover:bg-white hover:text-gray-800 duration-300`}
          ref={refProp}
        >
          <div className='flex gap-2 justify-center'>
            <BsFillCreditCardFill className='w-8 h-8' />
          </div>
          <span>Є зручна можливість оформити оплату частинами</span>
        </motion.div>
      </div>
    </>
  );
};

AboutPaymentSection.propTypes = {
  refProp: PropTypes.object 
};

export default AboutPaymentSection;