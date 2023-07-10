import React from "react";
import { useEffect, useState } from "react";
import firebase from "./firebaseApp";
import { useSelector,useDispatch } from "react-redux";

const getProducts = async () => {
    let data = await firebase.firestore().collection("Products").get();
    let productsArr = [];
    data.forEach((doc) => {
      let product = {
        id: doc.id,
        name: doc.data().Name,
        price: doc.data().Price,
        quantity: doc.data().Quantity,
      };
      productsArr.push(product);
    });
    return productsArr;
}

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
    return customersArr;
}



    export default {getProducts,getCustomers};