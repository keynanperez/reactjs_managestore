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

const getPurchases = async () => {
  let data = await firebase.firestore().collection("Purchases").get();
  let purchasesArr = [];
  data.forEach((pur) => {
    console.log(pur.data())
    const d = new Date("July 21, 1983 01:15:00");
    console.log(d)
    let purchase = {
      id: pur.id,
      customerID: pur.data().customerID,
      ProductID: pur.data().ProductID,
      Date: pur.data().Date,
    };
    purchasesArr.push(purchase);
 
  });
  return purchasesArr;
}






  export default {getProducts,getCustomers,getPurchases};