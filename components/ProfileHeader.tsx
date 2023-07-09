import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ProfileHeader = () => {
    const userInfo = useSelector((state: any) => state.buyer.userInfo);
    console.log(userInfo);

  return (
    <div className='max-w-contentContainer shadow-bannerShadow w-full'>
        <div>
            <div>
                <h3>Привіт <span>{userInfo.name}</span></h3>
                <p>@{userInfo.email}</p>
            </div>
            <div>
                
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default ProfileHeader