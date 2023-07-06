import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FormatePrice from './FormatePrice';

interface PaymentPageProps {
  amount: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ amount }) => {
  const productData = useSelector((state: any) => state.buyer.productData);
  const userInfo = useSelector((state: any) => state.buyer.userInfo);
  const [order, setOrder] = useState<any[]>([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [newPost, setNewPost] = useState('');
  const [isInputsFilled, setIsInputsFilled] = useState(false);

  useEffect(() => {
    if (clientName !== '' && clientPhone !== '' && newPost !== '') {
      setIsInputsFilled(true);
    } else {
      setIsInputsFilled(false);
    }
  }, [clientName, clientPhone, newPost]);

  const handlePayment = async () => {
    return;
  };

  const handleCreditPayment = async () => {
    return;
  };

  const namePlaceholder = "повне ім\'я та прізвище";

  return (
    <div className='max-w-contentContainer mx-auto flex items-center h-[500px]'>
      <div className='mx-auto shadow-bannerShadow p-5'>
        <form className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label>Ім'я та прізвище для відправки:</label>
            <input
              onChange={e => setClientName(e.target.value)}
              className='border-b-[2px] border-b-gray-400 text-gray-700'
              type="text"
              placeholder={namePlaceholder}
            />
          </div>
          <div className='flex flex-col'>
            <label>Номер телефону для відправки:</label>
            <input
              onChange={e => setClientPhone(e.target.value)}
              type="tel"
              id="phone"
              name="phone"
              className='border-b-[2px] border-b-gray-400 text-gray-700'
              placeholder='+380730000000'
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className='flex flex-col'>
            <label>Вкажіть відділення та адресу Нової Пошти:</label>
            <input
              className='border-b-[2px] border-b-gray-400 text-gray-700'
              type="text"
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              placeholder="Номер та адреса відділення Нової Пошти"
            />
          </div>
        </form>
        <div className='flex flex-col mt-5 gap-2'>
          <button
            className={`bg-green-600 hover:bg-green-700 
                      w-full text-white h-10 rounded-md 
                      font-semibold duration-300 ${!isInputsFilled && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isInputsFilled} // Disable the button if inputs are not filled
            onClick={handlePayment}
                   >
            Сплатити картою <FormatePrice amount={amount} />
          </button>
          <button
            className={`bg-green-600 hover:bg-green-700 
                      w-full text-white h-10 rounded-md 
                      font-semibold duration-300 ${!isInputsFilled && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isInputsFilled} // Disable the button if inputs are not filled
            onClick={handleCreditPayment}
          >
            Оформити оплату частинами
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;