import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FormatePrice from './FormatePrice';
import { useRouter } from 'next/router';
import { resetCart } from "../redux/buyerSlice";

interface PaymentPageProps {
  amount: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ amount }) => {
  const productData = useSelector((state: any) => state.buyer.productData);
  const userInfo = useSelector((state: any) => state.buyer.userInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const [orderId, setOrderId] = useState<string>();
  const [clientName, setClientName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [newPost, setNewPost] = useState('');
  const [isInputsFilled, setIsInputsFilled] = useState(false);
  const status = 0;
  console.log(orderId);
 
  

  useEffect(() => {
    const generateOrderId = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let orderId = '';
      for (let i = 0; i < 10; i++) {
        orderId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return setOrderId(orderId);
    };

    generateOrderId();
    }, []);


  useEffect(() => {
    if (clientName !== '' && clientPhone !== '' && newPost !== '') {
      setIsInputsFilled(true);
    } else {
      setIsInputsFilled(false);
    }
  }, [clientName, clientPhone, newPost]);

  const data = { orderId, productData, userInfo, amount, clientName, clientPhone, newPost };
  console.dir(data);

  function convertToKopecks(amount) {
    var kopecks = amount * 100;
    return kopecks;
  }

  let kopecksAmount = convertToKopecks(amount);

  const createOrder = async (data) => {
    try {
      const res = await axios.post("/api/orderdata", data);
      if (res.status === 201) {
        dispatch(resetCart());
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const handlePayment = async (e) => {
    e.preventDefault();

    const done = true
      //запис ордеру у базу
      if (done) {
          const paymentMethod = 'card';
          const invoice = "not specified";
          const data = {
            orderId, 
            productData, 
            userInfo, 
            amount, 
            clientName, 
            clientLastName, 
            clientPhone, 
            newPost, 
            paymentMethod, 
            status, 
            invoice
          };
          createOrder(data);
      }
      /*
      if (done) {
        window.location.href = '/success'
      }
      */
    // Виконати необхідні дії для передачі даних до платіжної системи
    // і отримання URL переадресації на платіжну сторінку
      /*
    try {
      const response = await axios.post('https://pay.fondy.eu/api/checkout/redirect/', {
        order_id: orderId,
        merchant_id: '1397120',
        order_desc: 'clothing and accessories',
        signature: 'Not for tests. Test credentials: https://docs.fondy.eu/docs/page/2/',
        amount: kopecksAmount,
        currency: 'UAH',
      });
      // Отримання URL переадресації
      const redirectUrl = response.data.redirectUrl;
      if (response) {
        window.location.href = redirectUrl;
      }

      
    
      
    } catch (error) {
      console.error(error);
      window.location.href = '/ordererror';
    }
    */
  };

  const handleCreditPayment = async (e) => {
    e.preventDefault();
    // Виконати необхідні дії для оплати частинами
    // Якщо оплата вдалась:
    window.location.href = '/success';

    // Якщо оплата не вдалась:
    window.location.href = '/ordererror';
   
  };

  const namePlaceholder = "Введіть повне ім\'я...";

  return (
    <div className='max-w-contentContainer mx-auto flex items-center h-[500px]'>
      <div className='mx-auto shadow-bannerShadow p-5'>
        <form className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label>Введіть ваше ім&apos;я:</label>
            <input
              onChange={e => setClientName(e.target.value)}
              className='border-b-[2px] border-b-gray-400 text-gray-700'
              type="text"
              placeholder={namePlaceholder}
            />
          </div>
          <div className='flex flex-col'>
            <label>Введіть ваше прізвище:</label>
            <input
              onChange={e => setClientLastName(e.target.value)}
              className='border-b-[2px] border-b-gray-400 text-gray-700'
              type="text"
              placeholder="Введіть Ваше прізвище..."
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
              placeholder="Номер та адреса відділення Нової Пошти..."
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