import React from 'react'
import ProductItem from './ProductItem';
export default function Perview({item}) {
  return (
    <div>
         {                
             item.map((product) => (                
                <ProductItem key={product.id} product={product} />
            ))            
            }  
    </div>
  )
}
