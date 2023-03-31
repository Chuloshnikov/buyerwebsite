import React from 'react';




const CatalogPage = ({ProductData}: any) => {
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
        {ProductData.map(item) => (
            <div></div>
        )
        }  
    </div>
  )
}

export default CatalogPage;