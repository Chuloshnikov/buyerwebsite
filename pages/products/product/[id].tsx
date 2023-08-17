import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoPlus } from 'react-icons/go';
import { Swiper, SwiperSlide } from "swiper/react";
import default_product from "../../../assets/icons/default_product.png";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/buyerSlice';
import toast, { Toaster } from 'react-hot-toast';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";




const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const {id} = router.query;


  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axios.get(`/api/productdata?id=${id}`).then(response => {
      setProduct(response.data);
    })
    setLoading(false);
  },[id]);

  const _id = product._id;

  return (
    <div className='w-full bg-white text-gray-800 px-4'>
       <div className='max-w-contentContainer mx-auto flex items-center py-4 xs:flex-col lg:flex-row'>
          <div className='w-2/3 h-full xs:w-full flex items-center justify-center overflow-hidden relative'>
              <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                  
                    {product.images ? (product.images.map((image, index) => (
                      <SwiperSlide key={index}> 
                        <img
                        src={image}
                        alt="productImg"
                        className='w-[100%] transform-origin-top-left cursor-move duration-500'
                        />
                    </SwiperSlide>))) : (
                        <img 
                        src={default_product} 
                        alt="productImg"
                        className='w-[100%] transform-origin-top-left cursor-move duration-500'
                        />)
                    }
              </Swiper>
          </div>
          <div className='w-1/3 h-full xs:w-full flex flex-col gap-2'>
            <div>
              {product.quantity <= 0 ? 
              (<div className='xs:p-0 mdl:p-1 bg-red-400 rounded-md'>
                  <p className='mdl:py-2 xs:p-1 md:p-0 text-center'>Нажаль у данний момент цього товару нема в наявності</p>
                </div>) :
              ("")
              }
            </div>
            <div className='p-2'>
                <button 
                onClick={() => dispatch(addToCart({
                  _id: product._id,
                  title: product.title,
                  brand: product.brand,
                  oldPrice: product.oldPrice,
                  price: product.price,
                  description: product.description,
                  sizes: product.sizes,
                  category: product.category,
                  images: product.images,
                  quantity: product.quantity,
                })) && toast.success(`${product.title.substring(0,20)} додано у кошик`)
              }
                className='xs:flex md:hidden items-center gap-1 py-3 px-2 bg-orange-400 text-white rounded-md 
                hover:bg-orange-500 duration-300'
                >
                  <span><GoPlus/></span>
                    Додати у кошик
                </button>
            </div>
            <div className='p-2 flex items-center justify-between'>
                <h2 className='text-xl font-bold'>{product.title}</h2>
                <p className='text-lg font-semibold'>{product.brand}</p>
            </div> 
            <div className='p-2'>
                <p className='text-sm font-base'>Категорія: {product.category}</p>
            </div>
            <div className='p-2'>
                <p className='text-sm font-base'>Poзмір: {product.sizes}</p>
            </div>
            <div className='p-2'>
                <p className='text-sm font-base'>Кількість в наявності: {product.quantity}</p>
            </div>
            <div className='p-2'>
                <p className='text-lg font-base flex items-center justify-between'>
                  <span className='text-green-400'>Ціна: {product.price} грн</span>
                  {product.oldPrice ? <span
                  className='text-gray-500 line-through decoration-[1px]'
                  >
                    Стара ціна: {product.oldPrice} грн
                  </span> : ""}
                </p>
            </div>
            <div className='p-2'>
                <p className='text-sm font-base'>{product.description}</p>
            </div>
            <div className='p-2'>
                {
                  product.quantity ? (
                    <button 
                    onClick={() => dispatch(addToCart({
                        _id: product._id,
                        title: product.title,
                        brand: product.brand,
                        oldPrice: product.oldPrice,
                        price: product.price,
                        description: product.description,
                        sizes: product.sizes,
                        category: product.category,
                        images: product.images,
                        quantity: product.quantity,
                      })) && toast.success(`${product.title.substring(0,20)} додано у кошик`)
                  }
                    className='xs:hidden mdl:flex items-center gap-1 py-3 px-2 bg-orange-400 text-white rounded-md 
                    hover:bg-orange-500 duration-300'
                    >
                      <span><GoPlus/></span>
                        Додати у кошик
                    </button>
                  ) : (
                      <button 
                      disabled
                      className='xs:hidden mdl:flex items-center gap-1 py-3 px-2 bg-gray-400 text-white rounded-md'
                      >
                        <span><GoPlus/></span>
                          Додати у кошик
                      </button>
                  )
                }
                
            </div>
          </div>
       </div>
       <Toaster
      reverseOrder={false}
      position="top-center"
      toastOptions={{
        style:{
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        }
      }}
      />
    </div>
  )
}

export default ProductDetails;