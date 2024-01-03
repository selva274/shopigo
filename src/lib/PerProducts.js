import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import PerItemList from "./PerItemList";

function PerProducts({ products }) {   
 const { id }=useParams();

 console.log(products);
  return (
    <div>
    <NavBar/> 
      <PerItemList id={id} products={products}/>
    </div>
  )
}

export default PerProducts;

