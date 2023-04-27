import React, { useState, useEffect } from 'react';
import CatalogPage from '../components/CatalogPage';
import axios from 'axios';




const Catalog = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])
  const  fetchProducts = async () => {
    await axios.get('/api/productdata').then(result => {
      setProductData(result.data);
      console.log(productData);
    });
  }
  
  return (
    <div className='max-w-contentContainer mx-auto'>
      <CatalogPage productData={productData}/>
    </div>
  )
}

//=======data fatching
/*
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/productdata");
  

  return {
    props: {
      productData: res.data,
    }
  }
}
*/

export default Catalog;