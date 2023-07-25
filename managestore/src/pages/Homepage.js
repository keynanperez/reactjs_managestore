import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  //this page have 3 link to the 3 main pages in the website
  return (
    <div>
      <h1> Home Page</h1> <br />
      <Link to="products">Products</Link>
      <Link to="customers">Customers</Link>
      <Link to="purchases">Purchases</Link>
    </div>
  );
};

export default Homepage;
