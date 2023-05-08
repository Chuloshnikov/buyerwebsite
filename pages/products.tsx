import React, { useState, useEffect } from 'react';
import CatalogPage from '../components/CatalogPage';
import axios from 'axios';
import Spinner from '../components/Spinner';




const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
      setIsLoading(true);
    axios.get('/api/productdata').then(result => {
      setProductData(result.data);
      setIsLoading(false);
    });
  }, []);

  console.log(productData);

  
  return (
    <div className='max-w-contentContainer mx-auto'>
      {isLoading && <Spinner/>}
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

export default Products;