import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
    slide1,
    slide2,
    slide3,
    slide4,
} from '../assets/images/index';
import Link from 'next/link';

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";




const Banner = () => {
  return (
        <div className='w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]'>
            <div className='w-full rounded-lg xs:h-[320px] md:h-[410px] shadow-bannerShadow relative'>
            <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className='w-full xs:h-[320px] md:h-[410px] 
          rounded-lg relative object-cover' 
          src={slide1} alt="sliderImg" priority
          />
          <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white'>
            <h1 className='text-2xl font-bold '>Твій кращий баєр</h1>
            <p className='text-sm leading-5'>Замовляй товари в наявності</p>
            <Link href={'/catalog'} className='bg-orange-400 text-white font-semibold
             rounded-lg w-24 py-2 hover:bg-orange-500 duration-300 text-center items-center'
             >
              <span>Каталог</span>
             </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <Image className='w-full xs:h-[320px] md:h-[410px] 
          rounded-lg relative object-cover' 
          src={slide2} alt="sliderImg" priority
          />
          <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white'>
            <h1 className='text-2xl font-bold '>Твій кращий баєр</h1>
            <p className='text-sm leading-5'>Замовляй товари в наявності</p>
            <button className='bg-orange-400 text-white font-semibold
             rounded-lg w-24 h-10 hover:bg-orange-500 duration-300'
             >
              Каталог
             </button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <Image className='w-full xs:h-[320px] md:h-[410px] 
          rounded-lg relative object-cover' 
          src={slide3} alt="sliderImg" priority
          />
          <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white'>
            <h1 className='text-2xl font-bold '>Твій кращий баєр</h1>
            <p className='text-sm leading-5'>Замовляй товари в наявності</p>
            <button className='bg-orange-400 text-white font-semibold
             rounded-lg w-24 h-10 hover:bg-orange-500 duration-300'
             >
              Каталог
             </button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <Image className='w-full xs:h-[320px] md:h-[410px] 
          rounded-lg relative object-cover' 
          src={slide4} alt="sliderImg" priority
          />
          <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white'>
            <h1 className='text-2xl font-bold '>Твій кращий баєр</h1>
            <p className='text-sm leading-5'>Замовляй товари в наявності</p>
            <button className='bg-orange-400 text-white font-semibold
             rounded-lg w-24 h-10 hover:bg-orange-500 duration-300'
             >
              Каталог
             </button>
          </div>
          </SwiperSlide>
      </Swiper>
            </div>
        </div>
  )
}

export default Banner;