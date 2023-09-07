import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BuyProductCopm from "./BuyProductCopm";
import { useState } from "react";

const ProductComp = (props) => {
  /* 
  this component create a single product element
  */
  const storeData = useSelector((state) => state);
  // state for buyproduct component visibility
  const [isVisible, setIsVisible] = useState(false);
  // getCustomerById function gets customer id and return customer name as a string
  const getCustomerById = (id) => {
    let customer = storeData.customers.filter((x) => x.id === id);
    return customer[0].firstName + " " + customer[0].lastName;
  };

  return (
    <>
      <tr key={props.data.id}>
        <td>
          {/* link to edit product with product id as param  */}
          <Link to={`/products/edit/${props.data.id}`}>
            {props.data.name} <br />
          </Link>
        </td>
        <td>{props.data.price}</td>
        <td>{props.data.quantity}</td>
        <td>
          {/* generate every purchases of each product */}
          {storeData.purchases
            .filter((x) => x.ProductID === props.data.id)
            .map((x) => {
              return (
                <div>
                  {/* link to edit customer gets the customer id as param */}
                  <Link to={`/customers/edit/${x.customerID}`}>
                    {getCustomerById(x.customerID)} <br />
                  </Link>
                  Date:{x.Date}
                  <input
                    type="button"
                    value="Add"
                    onClick={() => setIsVisible(true)}/>
                  <BuyProductCopm data={x.customerID} isVisible={isVisible} />
                </div>
              );
            })}
        </td>
      </tr>
    </>
  );
};

export default ProductComp;
