import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import Signup from "./components/signup/Signup";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [userProfile, setProfile] = useState([]);
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });
  console.log("Profile: ",userProfile.picture)
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
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    // googleLogout();
    setProfile(null);
  };
  return (
    <div className="App content-container">
      <Provider store={store}>
      
        {/* {userProfile !== null ? (
          <div>
            <img src={userProfile.picture}  alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {userProfile.name}</p>
            <p>Email Address: {userProfile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )} */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="cart/" element={<Cart />}></Route>
            <Route path="login/" element={<Login />}></Route>
            <Route path="signup/" element={<Signup />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
