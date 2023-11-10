import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./Footer/Footer";
import { CartProvider } from "react-use-cart";
import { useState } from "react";
import Menu from "./Menu/Menu";
const CartList = React.lazy(() => import("./components/CartList"));
const About = React.lazy(() => import("./components/About"));
const Profile = React.lazy(() => import("./components/Profile"));
const Products = React.lazy(() => import("./components/Products"));
const App = () => {
  const [showcart, setshowcart] = useState([]);
  const handleshow = (value) => {
    setshowcart(value);
  };

  return (
    <>
      <CartProvider>
        <Navbar handleshow={handleshow} />
        <Menu />
        {/* {showcart ? <Products /> : <CartList />} */}
        <Products /> 
        <Footer/>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback="Loading...">
                  <Products />   
                </React.Suspense>
              }
            />

            <Route
              path="/profile"
              element={
                <React.Suspense fallback="Loading...">
                  <Profile />
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <About />
                </React.Suspense>
              }
            />

            <Route
              path="/Home"
              element={
                <React.Suspense fallback="Loading...">
                  <Products /> 
                </React.Suspense>
              }
            />
            <Route
              path="CART"
              element={
                <React.Suspense fallback="Loading...">
                  <CartList />
                </React.Suspense>
              }
            />
          </Routes>
        </Router>
     
      </CartProvider>
    </>
  );
};

export default App;
