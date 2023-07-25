/* eslint-disable no-unreachable */
import React from "react";
import { useEffect, useState } from "react";
import firebase from "../firebaseApp";
import { useSelector } from "react-redux";
import CustomerComp from "../components/CustomerComp";

const Customers = () => {
  const storeData = useSelector((state) => state);

  //const [customers, setCustomers] = useState([]);

  return(
  <>
    <div>
      <h1> List of Customers</h1>
      <br />
      <table>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Purchases</th>
                    <th>Purchases Dates</th>
                    <th>Buy Products</th>
                  </tr>
                </thead>  
                <tbody>
      {storeData.customers.map((customer) => {
        return <CustomerComp data={customer} key={customer.id} />;
      })}
      </tbody>
      </table> 
  
    </div>
  </>
  )
};
export default Customers;
