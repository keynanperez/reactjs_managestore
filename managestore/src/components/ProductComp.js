import React from 'react'
import { Link } from "react-router-dom";

const ProductComp = (props) => {
  return (
    <div>
  
  name:<Link to={`/products/edit/${props.data.id}`}>{props.data.name} <br/></Link>
    price:{props.data.price} <br/>
    quantity:{props.data.quantity} <br/>

    
    </div>
  )
}

export default ProductComp