import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const CustomerComp = (props) => {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");

  const getProductById = (id) => {
    let product = storeData.products.filter((x) => x.id === id);
    console.log(product);
    return product[0].name;
  };

  const buyProduct = (e, id) => {
    e.preventDefault();
    const date = new Date();
    const [withoutTime] = date.toISOString().split("T");
    console.log(withoutTime);
    alert(withoutTime);
    alert(id);
    if (product !== "") {
      let obj = {
        customerID: id,
        ProductID: product,
        Date: withoutTime,
      };
      dispatch({ type: "ADD_PURCHASE", payload: obj });
    }
  };
  
  return (
    <>
      <tr key={props.data.id}>
        <td>
          {props.data.firstName} {props.data.lastName}
        </td>
        <td>
          {storeData.purchases
            .filter((x) => x.customerID === props.data.id)
            .map((x) => {
              return (
                <Link to={`/products/edit/${x.ProductID}`}>
                  {getProductById(x.ProductID)} <br />
                </Link>
              );
            })}
        </td>
        <td>
          {storeData.purchases
            .filter((x) => x.customerID === props.data.id)
            .map((x) => {
              return <div key={x.id}>{x.Date} </div>;
            })}
        </td>
        <td style={{ textAlign: "center" }}>
          <input
            type="button"
            value="Buy"
            onClick={(e) => buyProduct(e, props.data.id)}
          />
          <select name="product" onChange={(x) => setProduct(x.target.value)}>
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
          </select>
        </td>
      </tr>
    </>
  );
};

export default CustomerComp;
