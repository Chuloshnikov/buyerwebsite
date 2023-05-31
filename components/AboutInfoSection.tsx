import React from 'react';

const AboutInfoSection = () => {
  return (
    <>
        <div className='flex gap-4 text-center justify-center mt-8 text-lg text-gray-800 font-semibold'>
            <div className='flex flex-col gap-1 py-8 px-4 shadow-bannerShadow'>
              <span>📦🙌</span>
              <span>З вами з 2012 року</span>
            </div>
            <div className='flex flex-col gap-1 py-8 px-4 shadow-bannerShadow'>
            <span>📦🌍✈️</span>
            <span>Більше 2000 замовлень</span>
            </div>
            <div className='flex flex-col gap-1 py-8 px-4 shadow-bannerShadow'>
              <span>Працюю як фоп</span> 
              <span>Сплачую податки</span>
            </div>
        </div>
    </>
  )
}

export default AboutInfoSection;