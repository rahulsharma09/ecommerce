import React from "react";
import signUpImage from "./signup.png";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup-section">
      <div className="row">
        <div className="image-section-register col-lg-6">
          <img src={signUpImage} alt="" />
        </div>
        <div className="form-section col-lg-6">
            <h3 className="text-center mt-3">REDUX Store</h3>
          <div className="form-card">
            <h5 className="text-center">Create Account</h5>
            <form action="">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Name"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email Address"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Contact Number"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Enter Address"
              />

              <button className="btn btn-primary signup-btn">Sign Up</button>
              <p className="text-center mt-4">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
