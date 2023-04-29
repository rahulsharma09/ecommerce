import React from "react";
import loginImage from "./login.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setUserProfile } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState([])
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          dispatch(setUserProfile(res.data));
          navigate("/", { replace: true });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
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
            <hr />
            <p className="text-center">OR</p>
            <button className="btn btn-primary" onClick={() => login()}>Sign in with Google 🚀 </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
