import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { StoreProduct } from '../type';
import default_product from '../assets/icons/default_product.png';
import { isTemplateMiddle } from 'typescript';

import { HiMinusSmall } from 'react-icons/hi2';
import { MdOutlineAdd } from 'react-icons/md';

const CartPage = () => {
    const productData = useSelector((state: any) => state.buyer.productData);
    console.log(productData);
  return (
    <div className='w-full py-10 px-5'>
        <div className='w-full flex xs:flex-col lg:flex-row gap-10'>
            <div className='w-2/3 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-gray-600'>
                    Кошик&nbsp;
                    <span className='font-normal text-gray-400'>
                    ({productData.length} речей)
                    </span>
                </h1>
                {/* cart items*/}
                    <div>
                        {
                           productData?.length && productData.map((item: StoreProduct) =>(
                                <div key={item._id}
                                className="flex items-center justify-between gap-4 
                                border-b-[1px] border-b-zinc-200 pb-4"
                                >
                                    <div className='w-3/4 flex items-center gap-2'>
                                        <Image 
                                        className='w-32'
                                        width={500}
                                        height={500}
                                        src={item.images ? item.images[0] : default_product}
                                        alt="productImg"
                                        />  
                                        <div>
                                            <h2 className='text-base text-zinc-900'>
                                                {item.title}
                                            </h2>
                                            <p className='text-sm text-zinc-500'>
                                                {item.description.substring(0, 80)}...
                                            </p>
                                            <p className='text-sm text-zinc-500'>
                                              Ціна: {item.price} грн.
                                            </p>
                                            {/* buttons */}
                                        <div className='mt-2 flex items-center gap-6'>
                                            <button 
                                            className='text-sm font-semibold underline underline-offset-2 
                                            decoration-[1px] text-zinc-600 hover:no-underline
                                             hover:text-orange-400 duration-300'
                                             >
                                                Видалити
                                            </button>
                                            {item.quantity > 1 && (
                                                    <div  className='w-28 h-9 border border-[#a6a1a2] rounded-full 
                                                    text-base font-semibold text-black flex items-center 
                                                    justify-between px-3'>
                                                        <button><HiMinusSmall/></button>
                                                        <span>{item.quantity}</span>
                                                        <button><MdOutlineAdd/></button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div className='lg:w-1/3 p-4 h-[500px] xs:w-full flex flex-col border-[1px] border-zinc-400 rounded-md
            justify-center gap-4'
            >

            </div>
        </div>
    </div>
  )
}

export default CartPage;