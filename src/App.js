import "./styles.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React from "react";
import Home from "./components/Home";
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
        
        {/* {showcart ? <Products /> : <CartList />} */}
    <Navbar handleshow={handleshow} />
        <Menu />
                 

        <Router>
          <Routes>
          <Route
              path="/food-app-buttons"
              element={
                <React.Suspense fallback="Loading...">
                  <Home/>
                </React.Suspense>
              }
            />
          <Route
              path="/Home"
              element={
                <React.Suspense fallback="Loading...">
                  <Products />         <Footer/>
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback="Loading...">
                  <Profile />        <Footer/>
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <About />        <Footer/>
                </React.Suspense>
              }
            />

        
            <Route
              path="CART"
              element={
                <React.Suspense fallback="Loading...">
                  <CartList />        <Footer/>
                </React.Suspense>
              }
            />
             
             <Route path="/"/>
          </Routes>
        </Router>

      </CartProvider>
    </>
  );
};

export default App;
