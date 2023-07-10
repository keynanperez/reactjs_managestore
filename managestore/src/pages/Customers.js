import React from "react";
import { useEffect, useState } from "react";
import firebase from "../firebaseApp";
import { useSelector } from 'react-redux';

const Customers = () => {
  const storeData = useSelector(state => state)

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      let data = await firebase.firestore().collection("Customers").get();
      let customersArr = [];
      data.forEach((doc) => {
        let customer = {
          id: doc.id,
          firstName: doc.data().FirstName,
          lastName: doc.data().LastName,
          city: doc.data().City,
        };
        customersArr.push(customer);
      });
      setCustomers(customersArr);
      console.log(customers);
    };
    getCustomers();
  }, []);
  return <div>Customers</div>;
};
export default Customers;
