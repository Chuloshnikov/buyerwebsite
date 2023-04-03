import React from 'react';
import CatalogPage from '../components/CatalogPage';
import { Product } from '../../type';
import axios from 'axios';


interface Props {
  productData: Product
}

const Catalog = ({ productData }: Props) => {
  console.log(productData);
  return (
    <div className='max-w-contentContainer mx-auto'>
      <CatalogPage productData={productData}/>
    </div>
  )
}

//=======data fatching

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/productdata");
  

  return {
    props: {
      productData: res.data,
    }
  }
}

export default Catalog;