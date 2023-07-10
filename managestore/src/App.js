import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Purchases from "./pages/Purchases";
import EditCustomer from "./pages/EditCustomer";
import EditProduct from "./pages/EditProduct";
import { useSelector,useDispatch } from "react-redux";
import utils from "./utils";
import { useEffect, useState } from "react";



function App() {


  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async ()=>{
      let products = await utils.getProducts()
      console.log(products);
      let customers = await utils.getCustomers()
      console.log(customers);
      dispatch({ type: "ADD_PRODUCT", payload: { products: products } });
    }
getData()

  }, ([]));
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path='/products/edit/:id' element={<EditProduct/>}/>
        <Route path='/customer/edit/:id' element={<EditCustomer/>}/>
      </Routes>
    </div>
  );
}

export default App;
