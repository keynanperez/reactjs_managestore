import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

 const BuyProductCopm = (props) => {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [product, setProduct] = useState('')
  const [customer, setCustomer] = useState(props.data)


  const buyProduct=(e)=>{
    e.preventDefault();
    let prod = storeData.products.find(x=>x.id === product);
    if(prod.quantity>0)
    {
    //create now date without time and parse it to string
    const date = new Date();
    const [withoutTime] = date.toISOString().split("T");
    let obj = {
      customerID: customer,
      ProductID: product,
      Date: withoutTime,
    };
    dispatch({ type: "ADD_PURCHASE", payload: obj });
    let DecProduct =storeData.products.find(x=>x.id === product);
    DecProduct.quantity = DecProduct.quantity -1;
    dispatch({ type : "UPDATE_PRODUCT", payload :DecProduct})
  }
  else{
    alert("product out of stock")
  }
  }
  return (
    <div>
     {
      props.isVisible &&
        
     <div>
    Select Product <br />
              <select
                name="product"
                onChange={(x) => setProduct(x.target.value)}
              >
                <option value="" defaultValue>
                  Select Product
                </option>
                {storeData.products
                  .filter((x) => x.quantity > 0)
                  .map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>{" "}
              <input
            type="button"
            value="Buy"
            onClick={(e) => buyProduct(e)}
          />
              </div>

    }
    
    </div>

  )
}
export default BuyProductCopm;
