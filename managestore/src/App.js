import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Purchases from "./pages/Purchases";
import EditCustomer from "./pages/EditCustomer";
import EditProduct from "./pages/EditProduct";
import { useSelector, useDispatch } from "react-redux";
import utils from "./utils";
import { useEffect, useState } from "react";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      let products = await utils.getProducts();
      console.log(products);
      let customers = await utils.getCustomers();
      console.log(customers);
      let purchases = await utils.getPurchases();

      dispatch({ type: "LOAD_PRODUCTS", payload: { products: products } });
      //alert("1")
      dispatch({ type: "LOAD_CUSTOMERS", payload: { customers: customers } });
      dispatch({ type: "LOAD_PURCHASE", payload: { purchases: purchases } });


      console.log(purchases);

      //alert("2")
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/customers/edit/:id" element={<EditCustomer />} />
      </Routes>
    </div>
  );
}

export default App;
