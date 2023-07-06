import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



const PaymentPage = ({ amount }) => {
    const productData = useSelector((state: any) => state.buyer.productData);
    const userInfo = useSelector((state: any) => state.buyer.userInfo);
    const [order, setOrder] = useState([]);
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [newPost, setNewPost] = useState('');
    console.log(productData);


 
  return (
    <div className='max-w-contentContainer mx-auto flex items-center h-[500px]'>
        <div className='mx-auto shadow-bannerShadow p-5'>
            <form className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <label>Im'я та фамілія для відправки:</label>
                <input
                onChange={e => setClientName(e.target.value)}
                className='border-b-[2px] border-b-gray-400 text-gray-700'
                type="text" placeholder='повне іmя та фамілія'/>
              </div>
              <div className='flex flex-col'>
                <label>Номер телефону для відправки:</label>
                <input 
                onChange={e => setClientPhone(e.target.value)} 
                type="tel" id="phone" name="phone"
                className='border-b-[2px] border-b-gray-400 text-gray-700'
                  placeholder='+380730000000'
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label>Виберіть відділення нової пошти для відправки:</label>
                <input
                  className='border-b-[2px] border-b-gray-400 text-gray-700'
                  type="text"
                  value={newPost}
                  onChange={e => setNewPost(e.target.value)}
                  placeholder="Номер та адреса відділення Нової Пошти"
                />
              </div>
            </form>
        </div>
    <div>
      Payment
    </div>
  )
}

export default PaymentPage;