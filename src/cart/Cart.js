import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
export default function Cart({products,item}) {
  const {count}=useParams()
 console.log(item);
  return (
    <div className='cart'>      
        <h3>You ordered {count} Product </h3> 
        <h4>Thank you!</h4>
    </div>
  )
}
