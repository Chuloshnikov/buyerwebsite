import React from 'react';
import CatalogPage from '../components/CatalogPage';
import { Product } from '../../type';


interface Props {
  productData: Product
}

const Catalog = ({ productData }: Props) => {
  console.log(productData);
  return (
    <div>
      <CatalogPage productData={productData}/>
    </div>
  )
}

//=======data fatching

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  }
}

export default Catalog;