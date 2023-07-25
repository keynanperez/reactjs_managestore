import React from "react";
import { useSelector } from "react-redux";
import ProductComp from "../components/ProductComp";

//product page split the page to two areas
//one area for total purchases and the other for list of products
const Products = () => {
  //storeData gets all data from the store
  const storeData = useSelector((state) => state);
  return (
    <>
      <div style={{ width: "50%", float: "left" }}>
        <h1> Total Purchased Products</h1>
        <br />
        {storeData.purchases.length}
      </div>
      <div style={{ width: "50%", float: "right" }}>
        <h1> List Of Products</h1>
        <br />
        <br />
        {/* 
        a table that gets all the products from the store 
        every component gets the data{product object} and key{product id}
        */}
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Purchases List</th>
            </tr>
          </thead>
          <tbody>
            {storeData.products.map((product) => {
              return <ProductComp data={product} key={product.id} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
