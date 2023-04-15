import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { useState, useEffect } from 'react';
import './ProductDetail.css'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);
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
    let flag = true;
    items.map((elem) => {
      if(elem.id == product.id){
        alert("Item already added to cart");
        flag = false;
      }
    })
    if(flag){
      dispatch(add(product))
    }
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