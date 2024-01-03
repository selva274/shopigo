


import { useParams } from 'react-router-dom';
import Perview from './Perview';

const PerItemList=({products})=> {
  const { id }=useParams();
  let item=products.filter((value,index,array)=>array[index].id===id ); 
  console.log(item);
  return (     
        <div className="products" id="products"> 
    {
        <Perview item={item}/>
    }    
  
    </div>
  )
}


export default PerItemList;
