import React from 'react';
import { GiCommercialAirplane, GiEarthAmerica, GiPayMoney } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCalendarCheck, FaHandshake, FaSuitcase } from "react-icons/fa";
import { RiTruckFill } from "react-icons/ri";


const AboutInfoSection = () => {
  return (
    <>
        <div className='flex gap-4 text-center justify-center mt-8 text-lg text-gray-800 font-semibold'>
            <div className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px]
            hover:bg-orange-400 hover:text-white duration-300'>
              <div className='flex gap-2 justify-center'>
                  <FaHandshake className='w-10 h-10'/>
                  <FaCalendarCheck className='w-8 h-8'/>
              </div>
              <span>З вами з 2012 року</span>
            </div>
            <div className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px]
             hover:bg-orange-400 hover:text-white duration-300'>
                <div className='flex gap-2 justify-center'>
                  <BsFillBoxSeamFill className='w-8 h-8'/>
                  <GiEarthAmerica className='w-8 h-8'/>
                  <GiCommercialAirplane className='w-8 h-8'/>
                </div>
                <span className='text-2xl font-bold'>2000+</span>
                <span>Більше 2000 замовлень</span>
            </div>
            <div className='flex flex-col gap-4 py-8 px-4 shadow-bannerShadow min-w-[250px]
            hover:bg-orange-400 hover:text-white duration-300'>
              <div className='flex gap-2 justify-center'>
                <FaSuitcase className='w-8 h-8'/>
                <GiPayMoney className='w-10 h-10'/>
              </div>
              <span>Працюю як фоп</span> 
              <span>Сплачую податки</span>
            </div>
        </div>
    </>
  )
}

export default AboutInfoSection;