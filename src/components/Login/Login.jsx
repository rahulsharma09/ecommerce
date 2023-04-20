import React from "react";
import loginImage from "./login.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-section">
      <div className="row">
        <div className="image-section col-lg-6">
          <img src={loginImage} alt="" />
        </div>
        <div className="form-section col-lg-6">
            <h3 className="text-center mt-4">REDUX Store</h3>
          <div className="form-card">
            <h5 className="text-center">Login</h5>
            <form action="">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
              />
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
              <button className="btn btn-success login-btn">Login</button>
              <p className="text-center mt-4">
                Don't have an account? <Link to="/signup">Signup here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
