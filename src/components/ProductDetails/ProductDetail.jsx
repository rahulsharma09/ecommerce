import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';
import { useState, useEffect } from 'react';
import './ProductDetail.css'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const data = useParams();
  const productId = data.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetch Product")
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      console.log(data)
      setProduct(data)
    }
    fetchProducts();
  }, []);
  const handleCart = (product) => {
    dispatch(add(product))
  }
  return (
    <div className='row p-5'>
        <div className="col-lg-5">
          <img className='demo-image' src={product.image} alt="" />
        </div>
        <div className="col-lg-7">
          <h4>{product.title}</h4>
          <p className='text-jsutify'>{product.description}</p>
          <p>Category : {product.category}</p>
          {/* <p>Rating : {product.rating.rate} / 5</p> */}
          <h5>${product.price}</h5>
          <button onClick={() => handleCart(product)} className='btn btn-primary ml-auto d-flex'>
            Add to Cart
          </button>
        </div>
    </div>
  )
}

export default ProductDetail