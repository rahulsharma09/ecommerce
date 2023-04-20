import { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";
import Skeleton from "react-loading-skeleton";
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
    setTimeout(() => {
      fetchProducts();
    }, 1800)
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      {
      products.length <= 0 ?
      <div className="skeleton-class">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((loading) => (
        <div  key={loading}>
         <Skeleton width={300} height={300} />
        </div>))}
      </div>
     : 
      <div className=" productsWrapper p-4">
      {products.map((product) => (
        <>
          <Link to={`product/${product.id}`}>
            <div className="custom-card p-4" key={product.id}>
              <img className="prod-image" src={product.image} alt="" />
              <p>{product.title.substring(0,60)}...</p>
              <div className="price-div">
              <h5>${product.price}</h5>
              <p>{product.rating.rate} / 5</p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
    }
    </>
    
  );
};

export default Products;
