import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

 const BuyProductCopm = (props) => {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [product, setProduct] = useState('')
  const [customer, setCustomer] = useState(props.data)
  const [purchases, setPurchases] = useState({
    ProductID: "",
    customerID: "",
    Date: "",
  });

  const buyProduct=(e)=>{
    e.preventDefault();
    const date = new Date();

    const [withoutTime] = date.toISOString().split("T");
    let obj = {
      customerID: customer,
      ProductID: product,
      Date: withoutTime,
    };
    dispatch({ type: "ADD_PURCHASE", payload: obj });

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
