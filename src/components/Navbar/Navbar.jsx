import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <>
    <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to='/'>REDUX STORE</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item ml-4">
            <Link to='login/'>Login / Signup</Link>
          </li>
          <li className="ml-3 nav-item active">
          <Link to='cart/'>Cart</Link>
          <span className='ml-3 text-white'>Cart Items: {items.length}</span>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar