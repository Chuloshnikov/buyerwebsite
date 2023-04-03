import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoPlus } from 'react-icons/go';

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  },[]);



  console.log(product);
  return (
    <div className='w-full bg-white text-gray-800 px-4'>
       <div className='max-w-contentContainer mx-auto flex items-center py-4 xs:flex-col lg:flex-row'>
          <div className='w-2/3 h-full xs:w-full flex items-center justify-center overflow-hidden relative'>
          <img
                src={product.img}
                alt="productImg"
                className='w-[80%] transform-origin-top-left cursor-move duration-500'
                />
            
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
                <button className='flex items-center gap-1 py-3 px-2 bg-orange-400 text-white rounded-md 
                hover:scale-105 hover:bg-orange-500 duration-300'
                >
                  <span><GoPlus/></span>
                    Додати у кошик
                </button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ProductDetails;