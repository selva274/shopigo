import { stripHtml } from "string-strip-html";
import PropTypes from 'prop-types';
import "../App.css"
import { useState } from "react";
const ProductItem = ({ product ,cartItem}) => {

        const { result } = stripHtml(product.description);
  return ( 
  
     <div className="product__card">
      <a  href={`/product/${product.id}/`}><img className="product__image" src={product.image?.url} alt={product.name} /></a>
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
          {result}
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
          <button onClick={()=>{cartItem(["Hello"])}}>ADD</button>
        </div>
      </div>
    </div>


  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;