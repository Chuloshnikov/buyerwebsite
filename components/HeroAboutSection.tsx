import React, { useState, useRef } from 'react';
import AboutClosedChannelSection from './aboutSections/AboutClosedChannelSection';
import AboutHelloSection from './aboutSections/AboutHelloSection';
import AboutOrderingSection from './aboutSections/AboutOrderingSection';
import AboutPaymentSection from './aboutSections/AboutPaymentSection';

const HeroAboutSection = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const ref = useRef(null);
    console.log(aboutOpen)
  return (
    <div>
        {aboutOpen === false ? (
            <div 
            className='text-center'
            >
                <button
                onClick={() => setAboutOpen(true)}
                className='bg-orange-400 text-white font-semibold
                rounded-lg w-24 py-2 hover:bg-orange-500 duration-300 text-center items-center mt-5'
                >
                    Дізнатись більше
                </button>
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