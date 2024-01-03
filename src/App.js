import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Products from "./lib/products";
import commerce from './lib/commerce';
import PerProducts from "./lib/PerProducts";
import Cart from "./cart/Cart";

const App = () => {  
  const [productsArr, setProductsArr] = useState([]);  
  const [cartItems,setCartItems]=useState([]);
  const [itemCount,setItemCount]=useState(0);
  const updatedCount=useCallback(()=>{setItemCount(itemCount+1)},[itemCount])
  const updatedCartItem=useCallback((item)=>{setCartItems([...cartItems,item])},[cartItems])

  useEffect(() => {
      fetchProducts();
    }, []);
    
    const fetchProducts = () => { 
      commerce.products.list().then((products) => {
        setProductsArr(products.data);
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }
    const products={
      productsArr:productsArr,
      count:updatedCount,
      numCount:cartItems.length,
      cartItem:updatedCartItem
    }
  return (
   <Router>
    <Routes>    
      <Route path="/" element={<Products {...products}/>}/> 
      <Route path='/product/:id' element={<PerProducts products={productsArr}/>}/>
      <Route path='/cart/:count' element={<Cart products={productsArr} count={itemCount} item={cartItems}/>}/>    
    </Routes>
   </Router>
  )
};

export default App;