import { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
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
  };
  return (
    <div className=" productsWrapper p-4">
      {products.map((product) => (
        <>
          <Link to={`product/${product.id}`}>
            <div className="card p-4" key={product.id}>
              <img className="prod-image" src={product.image} alt="" />
              <p>{product.title}</p>
              <div className="price-div">
              <h5>${product.price}</h5>
              <p>{product.rating.rate} / 5</p>
              </div>
              {/* <button
                onClick={() => handleAdd(product)}
                className="btn btn-primary cart-btn"
              >
                Add to cart
              </button> */}
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Products;
