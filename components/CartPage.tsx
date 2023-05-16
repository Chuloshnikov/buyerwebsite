import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, deleteItem, minusQuantity, plusQuantity } from '../redux/buyerSlice';
import { StoreProduct } from '../type';
import default_product from '../assets/icons/default_product.png';
import { isTemplateMiddle } from 'typescript';

import { HiMinusSmall } from 'react-icons/hi2';
import { MdOutlineAdd } from 'react-icons/md';
import FormatePrice from './FormatePrice';

const CartPage = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state: any) => state.buyer.productData);
    console.log(productData);
  return (
    <div className='w-full py-10 px-5'>
        <div className='w-full flex xs:flex-col lg:flex-row gap-10'>
            <div className='lg:w-2/3 xs:w-full flex flex-col gap-5'>
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
                                className="xs:flex-col mdl:flex-row flex items-center justify-between gap-4 
                                border-b-[1px] border-b-zinc-200 pb-4"
                                >
                                    <div className='w-3/4 flex xs:flex-col mdl:flex-row items-center gap-2'>
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
                                            onClick={() => dispatch(deleteItem(item._id))}
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
                                                        <button
                                                        onClick={() => {
                                                            dispatch(
                                                                minusQuantity({
                                                                    _id: item._id,
                                                                    title:item.title,
                                                                    description: item.description,
                                                                    images: item.images,
                                                                    price: item.price,
                                                                    oldPrice: item.oldPrice,
                                                                    quantity: 1,
                                                                    brand: item.brand,
                                                                    category: item.category
                                                                })
                                                            )
                                                        }}
                                                        className='text-base w-4 h-4 text-zinc-600
                                                        hover:bg-[#74767c] hover:text-white
                                                        rounded-full flex item-center justify-center 
                                                        cursor-pointer duration-200'   
                                                        >
                                                            <HiMinusSmall/>
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                        onClick={() => {
                                                            dispatch(
                                                                plusQuantity({
                                                                    _id: item._id,
                                                                    title:item.title,
                                                                    description: item.description,
                                                                    images: item.images,
                                                                    price: item.price,
                                                                    oldPrice: item.oldPrice,
                                                                    quantity: 1,
                                                                    brand: item.brand,
                                                                    category: item.category
                                                                })
                                                            )
                                                        }}
                                                        className='text-base w-4 h-4 text-zinc-600
                                                        hover:bg-[#74767c] hover:text-white
                                                        rounded-full flex item-center justify-center 
                                                        cursor-pointer duration-200'   
                                                        >
                                                            <MdOutlineAdd/>
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                                        <p className='font-semibold text-xl text-[#2a8703]'>
                                            <FormatePrice amount={item.price * item.quantity}/>
                                        </p>
                                        {item.oldPrice && (
                                        <p className='text-sm line-through text-zinc-500'>
                                            <FormatePrice amount={item.oldPrice * item.quantity}/>
                                        </p>)
                                        }
                                        {item.oldPrice && (
                                            <div className='flex items-center text-xs gap-2'>
                                                <p className='bg-green-200 text-[8px] uppercase px-2 py-[1px]'>
                                                    Вы заощаджуэте 
                                                </p>
                                                <p className='text-[#2a8703] font-semibold'>
                                                    <FormatePrice
                                                    amount={item.oldPrice * item.quantity - item.price * item.quantity}
                                                    />
                                                </p>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button 
                    onClick={() => dispatch(resetCart())}
                    className='w-44 bg-red-500 text-white h-10 rounded-md text-base 
                    font-semibold hover:bg-red-800 hover:scale-105 duration-300'
                    >
                        Видалити все
                    </button>
            </div>
            <div className='lg:w-1/3 p-4 h-[500px] xs:w-full flex flex-col border-[1px] border-zinc-400 rounded-md
            justify-center gap-4'
            >
                <button
                className='bg-green-600 hover:bg-green-700 
                w-full text-white h-10 rounded-md 
                font-semibold duration-300'
                >
                    Оформити замовлення
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartPage;