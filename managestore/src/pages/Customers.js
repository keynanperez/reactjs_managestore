import React from "react";
import { useSelector } from "react-redux";
import CustomerComp from "../components/CustomerComp";

const Customers = () => {
  const storeData = useSelector((state) => state);

  return (
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
  );
};
export default Customers;
