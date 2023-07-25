import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Purchases = () => {
  const [product, setProduct] = useState("");
  const [customer, setCustomer] = useState("");
  const [purchdate, setPurchDate] = useState("");
  const [listPurch, setListPurch] = useState([]);
  const storeData = useSelector((state) => state);
  const SearchSubmit = (e) => {
    e.preventDefault();
    let listarr = [];
    listarr = storeData.purchases.filter(
      (x) => x.date === purchdate.toISOString
    );
    //console.log(listarr);
    //set the array on the list property
    if (product || customer) {
      if (product && customer) {
        let listarrproduct;
        listarrproduct = listarr.filter((i) => i.ProductID === product);

        let listarrcustomer;
        listarrcustomer = listarrproduct.filter(
          (m) => m.customerID === customer
        );
        setListPurch(listarrcustomer);
      } else {
        if (product) {
          let prod = listarr.filter((i) => i.ProductID === product);
          setListPurch(prod);
        }
        if (customer) {
          let cust = listarr.filter((i) => i.customerID === customer);
          setListPurch(cust);
        }
      }
      alert(product);
    } else {
      setListPurch(listarr);
    }
    //split the date
    const date = new Date();
    const [withoutTime] = date.toISOString().split("T");
    //console.log(withoutTime);
  };

  const getCustomerById = (id) => {
    let customer = storeData.customers.filter((x) => x.id === id);
    return customer[0].firstName + " " + customer[0].lastName;
  };
  const getProductById = (id) => {
    let Product = storeData.products.filter((x) => x.id === id);
    return Product[0].name;
  };
  return (
    <form onSubmit={(e) => SearchSubmit(e)} id="form">
      <table>
        <thead>
          <tr>
            <th>
              Product <br />
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
            </th>
            <th>
              Customer <br />
              <select
                name="customer"
                onChange={(x) => setCustomer(x.target.value)}
              >
                <option value="" defaultValue>
                  Select Customer
                </option>
                {storeData.customers.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.firstName + " " + item.lastName}
                    </option>
                  );
                })}
              </select>{" "}
            </th>
            <th>
              Date
              <br />
              <input
                type="date"
                onChange={(x) => setPurchDate(x.target.value)}
              />
            </th>
            <th>
              Search
              <br />
              <input type="submit" value="Search" />
            </th>
          </tr>
        </thead>
        <br />

        <tbody>
          {listPurch.map((x) => {
            return (
              <tr>
                <td>{getProductById(x.ProductID)}</td>
                <td>{getCustomerById(x.customerID)}</td>
                <td>{purchdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};
export default Purchases;
