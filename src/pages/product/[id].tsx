import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    <div className='w-full bg-white text-gray-800'>
       <div className='max-w-contentContainer mx-auto flex items-center py-4'>
          <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
          <img
                src={product.img}
                alt="productImg"
                className='w-[80%] transform-origin-top-left cursor-move duration-500'
                />
            
          </div>
          <div className='w-1/3 h-full flex flex-col gap-2'>
            <div className='p-2 border border-gray-400 flex items-center justify-between'>
                <h2 className='text-xl font-bold'>{product.title}</h2>
                <p className='text-lg font-semibold'>{product.brand}</p>
            </div> 
            <div className='p-2 border border-gray-400'>
                <p className='text-lg font-base'>Категорія: {product.category}</p>
            </div>
            <div className='p-2 border border-gray-400'>
                <p className='text-lg font-base flex items-center justify-between'>
                  <span className='text-green-400'>Ціна: {product.price} грн</span>
                  {product.oldPrice ? <span
                  className='text-gray-500 line-through decoration-[1px]'
                  >
                    Стара ціна: {product.oldPrice} грн
                  </span> : ""}
                </p>
            </div>
            <div className='p-2 border border-gray-400'>
                <p className='text-lg font-base'>{product.description}</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ProductDetails;