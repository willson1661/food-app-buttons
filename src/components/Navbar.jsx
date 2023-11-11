import "../styles.css";
import styled from "styled-components";
import React from "react";

import MyButton from "./MyButton";
import Dext from "./Dext";

const Navbar = (props) => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 50 ? "navbar navbar-scrolled" : "navbar";
  return (
    <div className="total">
      <div className={className}>
        <nav className="container">
          <div className="logo" onClick={() => props.handleshow(true)}>
            Foo<Span>dy Zo</Span>ne
            {/* <Foodie className="wil" to=""></Foodie> */}
          </div>

          <div className="y1" onClick={() => props.handleshow(false)}>
            <div>
              <ul>
             
                <MyButton to="Home" />
                <MyButton target="_blank" to="Profile" />
                <MyButton target="_blank" to="About" />
              </ul>
            </div>
            <div>
              <Dext className="wil" to="CART"></Dext>
            </div>
          
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;

const Span = styled.span`
  color: #3e85bd;

  letter-spacing: 3px;
`;
