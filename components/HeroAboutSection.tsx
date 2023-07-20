import React, { useState } from 'react';

const HeroAboutSection = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div>
        {!aboutOpen && (
            <div 
            className='text-center'
            >
                <button
                className='bg-orange-400 text-white font-semibold
                rounded-lg w-24 py-2 hover:bg-orange-500 duration-300 text-center items-center mt-5'
                >
                    Дізнатись більше
                </button>
            </div>
        )}
    </div>
  )
}

export default HeroAboutSection;