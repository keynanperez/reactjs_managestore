import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditCustomer = () => {
  const params = useParams();
  const storeData = useSelector((state) => state);
  const [customer, setCustomer] = useState({
    id: "",
    firstname: "",
    lastname: "",
    city: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setCustomer(storeData.customers.find((cust) => cust.id === params.id));
  }, []);

  const updateCustomer = (e) => {
    e.preventDefault();
    alert("Update!");
    dispatch({ type: "UPDATE_CUSTOMER", payload: customer });
  };

  const deleteCustomer = (e) => {
    e.preventDefault();
    alert("Deleted!");
    dispatch({ type: "DELETE_CUSTOMER", payload: customer.id });
  };

  return (
    <div>
      <h1> Edit Customer</h1>
      <form onSubmit={(e) => updateCustomer(e)}>
        First Name:{" "}
        <input
          type="text"
          name="firstname"
          value={customer.firstName}
          onChange={(firstname) =>
            setCustomer({ ...customer, firstName: firstname.target.value })
          }
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastname"
          value={customer.lastName}
          onChange={(lastname) =>
            setCustomer({ ...customer, lastName: lastname.target.value })
          }
        />
        <br />
        City:{" "}
        <input
          type="text"
          name="city"
          value={customer.city}
          onChange={(city) =>
            setCustomer({ ...customer, city: city.target.value })
          }
        />
        <br />
        <input type="submit" value="Update" />{" "}
        <input
          type="button"
          value="Delete"
          onClick={(e) => deleteCustomer(e)}
        />{" "}
      </form>
    </div>
  );
};

export default EditCustomer;
