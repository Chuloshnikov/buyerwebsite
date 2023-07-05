import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentPage = ({ amount }) => {
    const productData = useSelector((state: any) => state.buyer.productData);
    const userInfo = useSelector((state: any) => state.buyer.userInfo);
    console.log(productData);

  return (
    <div>
        {amount}
    </div>
  )
}

export default PaymentPage;