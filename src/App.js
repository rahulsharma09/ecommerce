import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App content-container">
      <Provider store={store}>
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
