import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css"
import ProductItem from './ProductItem';

const ProductsList = ({  products, numCount, cartItem }) => {
    console.log(products);
    return (
        <>
        <div className="products" id="products">
            {
                products.map((product) => (
                    <ProductItem key={product.id}  product={product} numCount={numCount} cartItem={cartItem} />
                ))
            }
            <div className='cart_Button'>
                <a href={`/cart/${numCount}`}>Go To Cart</a>
         </div>
         </div>
      
         </>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;