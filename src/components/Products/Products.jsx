import { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  }
  return (
    <div className=" productsWrapper p-4">
      {products.map((product) => (
        <>
          <div className="card p-4" key={product.id}>
            <img className="prod-image" src={product.image} alt="" />
            <p>{product.title}</p>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn btn-primary cart-btn">Add to cart</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
