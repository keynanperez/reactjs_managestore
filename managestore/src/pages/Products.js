import React from "react";
import { useEffect, useState } from "react";
import firebase from "../firebaseApp";
import { useSelector,useDispatch } from "react-redux";
import ProductComp from "../components/ProductComp";

const Products = () => {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
 

  return (
    <>
      <div style={{ width: "50%", float: "left" }}>
      <h1> Total 
Purchased Products</h1><br/>
      {storeData.purchases.length}</div>

      <div style={{ width: "50%", float: "right" }}>
      <h1> List Of Products</h1><br/>
        {storeData.products.map((product) => {
          return <ProductComp data={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Products;
