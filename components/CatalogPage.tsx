import React from 'react';
import { Item } from "../../type";
import { Product } from '../../type';
import Image from "next/image";
import { GoPlus } from 'react-icons/go';
import Link from 'next/link';
import default_product from "../assets/icons/default_product.png";

interface Props {
  productData: Product
}


const CatalogPage = ({ productData }: Props) => {
  return (
    <div className='py-6 px-4 grid xs:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-4  gap-4'>
        {productData.map((item: Item) => (
            <div key={item._id} className="border-[1px] border-gray-200 mb-6 group">
              <div className="w-full h-[350px] overflow-hidden p-1">
                <Image 
                  className='w-full h-full object-contain scale-100 group-hover:scale-105 duration-300'
                  width={300} 
                  height={250} 
                  src={item.images[0] ? item.images[0] : default_product} 
                  alt="itemImage"/>
              </div>
                {/* Description */}
                <div className='px-2 py-4 flex flex-col justify-center'>
                  <div className='text-base text-white flex justify-between'>
                    <button className=' p-2 rounded-lg bg-orange-400 flex items-center justify-center gap-1
                    hover:scale-105 hover:bg-orange-500 duration-300'
                    >
                      <span><GoPlus/></span>
                      У кошик
                    </button>
                    <Link href={`products/product/${item._id}`}>
                        <button className='p-2 rounded-lg bg-orange-400 flex items-center justify-center
                          hover:scale-105 hover:bg-orange-500 duration-300'
                        >
                          Детальніше
                        </button>
                    </Link>  
                  </div>
                  <div className='flex items-center gap-3 pt-2'>
                    <p className='text-lg font-semibold text-green-500'>
                      Ціна: {item.price} грн.
                    </p>
                    { item.oldPrice ? <p className='text-gray-500 line-through decoration-[1px]'>{item.oldPrice} грн.</p> : ""}
                  </div>
                  <div className='flex justify-between py-2'>
                    <p className='text-lg font-bold text-gray-600'>{item.title.substring(0, 25)}</p>
                    <p className='text-sm font-semibold text-gray-500 mr-2'>{item.brand}</p>
                  </div>
                  <p className='text-base text-zinc-500'>{item.description.substring(0, 80)}...</p>
                </div>
            </div>
          ))
        }  
    </div>
  )
}

export default CatalogPage;