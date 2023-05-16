import React from 'react';

type Amount = {
    amount: Number;
}

const FormatePrice = ({amount}: Amount) => {
    const formatedAmount = new Number(amount).toLocaleString("uk-UA", {
        style: "currency",
        currency:"UAH",
        minimumFractionDigits: 2
    })


  return (
    <span>{formatedAmount}</span>
  )
}

export default FormatePrice;