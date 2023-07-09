import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import Image from 'next/image';
import { signOut } from "next-auth/react";


const ProfileHeader = () => {
    const userInfo = useSelector((state: any) => state.buyer.userInfo);

  return (
    <div className='max-w-contentContainer shadow-bannerShadow w-full text-gray-800 flex justify-between'>
        <div className='flex gap-2 py-2 px-2'>
            <div className='text-base font-semibold flex flex-col gap-[2px]'>
                <h3>Привіт, <span>{userInfo?.name}</span></h3>
                <p>@{userInfo?.email}</p>
            </div>
            <div>
                {userInfo?.image ? (<Image src={userInfo.image} width={48} height={48} className="rounded-full xs:hidden sm:block" alt="userimage"/>)
                 : (
                    <div className='p-2 bg-orange-400 rounded-full'>
                        <FaUser className='text-white h-8 w-8'/>
                    </div>)
                 
                 }
            </div>
        </div>
        <div className='flex flex-col justify-center px-2'>
            <button 
            onClick={() => signOut()}
            className='text-white font-semibold px-5 py-2
             bg-orange-400 hover:bg-orange-600 duration-300'>
                Вийти
            </button>
        </div>
    </div>
  )
}

export default ProfileHeader