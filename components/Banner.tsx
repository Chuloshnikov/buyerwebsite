import React, {useState, useEffect} from 'react';
import GA4React from "ga-4-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from 'next/link';

import axios from "axios";

import Spinner from '../components/Spinner';

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";




const Banner = () => {
  const [bannerInfo, setBannerInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  axios.get('/api/banner').then(result => {
    setBannerInfo(result.data);
    setIsLoading(false);
  });
}, []);


  useEffect(() => {
    const ga4react = new GA4React(process.env.NEXT_PUBLIC_GA_TRACKING_ID); // Замініть на свій код відстеження
    ga4react.initialize().then().catch(error => console.error(error));
  }, []);

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
          {isLoading && <Spinner/>}
          {bannerInfo.map((banner) => (
            <SwiperSlide key={banner._id}>
                <img className='w-full xs:h-[320px] md:h-[410px] 
                rounded-lg relative object-cover' 
                src={banner.imageUrl} alt="sliderImg" priority="true"
                />
                <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white'>
                  <h1 className='text-2xl font-bold '>{banner.title}</h1>
                  <p className='text-sm leading-5'>{banner.description}</p>
                  <Link href={'/products'} className='bg-orange-400 text-white font-semibold
                  rounded-lg w-24 py-2 hover:bg-orange-500 duration-300 text-center items-center'
                  >
                    <span>Каталог</span>
                  </Link>
                </div>
                </SwiperSlide>
                    ))}
              </Swiper>
            </div>
        </div>
  )
}

export default Banner;