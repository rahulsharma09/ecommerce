import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import './Navbar.css';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const userProfile = useSelector((state) => state.user.data[0]);
  const items = useSelector((state) => state.cart);
  const [user, setUser] = useState([]);
  console.log("User ka profile -- ", userProfile);
  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          REDUX STORE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/">Products</Link>
            </li>
            {userProfile ? (
              <Avatar alt="Remy Sharp" src={userProfile.picture} />
              // <img className="profile-pic-logo" src={userProfile.picture} alt="" referrerpolicy="no-referrer" />
            ) : (
              <li className="nav-item ml-4">
                <Link to="login/">Login / Signup</Link>
              </li>
            )}
            <li className="ml-3 nav-item active">
              <Link to="cart/">Cart</Link>
              <span className="ml-3 text-white">
                Cart Items: {items.length}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
