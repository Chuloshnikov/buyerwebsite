import React, { useState, useRef } from 'react';
import AboutClosedChannelSection from './aboutSections/AboutClosedChannelSection';
import AboutHelloSection from './aboutSections/AboutHelloSection';
import AboutOrderingSection from './aboutSections/AboutOrderingSection';
import AboutPaymentSection from './aboutSections/AboutPaymentSection';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const HeroAboutSection = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const ref = useRef(null);
    console.log(aboutOpen)
  return (
    <div>
        {aboutOpen === false ? (
            <div 
            className='flex justify-center'
            >
                <motion.div
                onClick={() => setAboutOpen(true)}
                initial={{scale: 1}}
                animate={{ scale: 1.2}}
                transition={{repeat: Infinity, duration: 1}}
                className='bg-orange-400 text-white font-semibold items-center flex flex-col
                rounded-lg w-24 py-1 hover:bg-orange-500 duration-300 text-center items-center mt-5 cursor-pointer'
                >
                    <span>Дізнатись більше</span>
                    <span><BsFillCaretDownFill className='w-8 h-8'/></span>
                </motion.div>
            </div>
        ) : (
            <div className='flex flex-col gap-16 mt-8 mb-8'>
                <AboutHelloSection/>
                <AboutOrderingSection/>
                <AboutPaymentSection refProp={ref}/>
                <AboutClosedChannelSection/>
            </div>
        )}
    </div>
  )
}

export default HeroAboutSection;