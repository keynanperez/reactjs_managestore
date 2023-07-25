import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const EditProduct = () => {
  const params = useParams();
  const storeData = useSelector((state) => state);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(storeData.products.find((prod) => prod.id === params.id));
  }, []);


  const updateProduct = (e) => {
    e.preventDefault();

    alert("Update!");

    dispatch({ type: "UPDATE_PRODUCT", payload: product });
  };

  const deleteProduct = (e)=>{
    e.preventDefault();
    alert("Deleted!");
    dispatch({ type: "DELETE_PRODUCT", payload: product.id });


  }
  return (
    <div>
      <h1> EditProduct</h1>
      <form onSubmit={(e) => updateProduct(e)}>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={(name) =>
            setProduct({ ...product, name: name.target.value })
          }
        />
        <br />
        Price:{" "}
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={(price) =>
            setProduct({ ...product, price: price.target.value })
          }
        />
        <br />
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={(quantity) =>
            setProduct({ ...product, quantity: quantity.target.value })
          }
        />
        <br />
        <input type="submit" value="Update" />{" "}
        <input type="button"  value="Delete" onClick={e => deleteProduct(e)}/>
{" "}

      </form>
    </div>
  );
};

export default EditProduct;
