

import NavBar from "../NavBar";
import ProductsList from "./ProductList";
function Products({productsArr,numCount,cartItem}) {   
  return (
    <div>
    <NavBar/>
        <ProductsList products={productsArr} numCount={numCount} cartItem={cartItem}/>
        
    </div>
  )
}

export default Products;

