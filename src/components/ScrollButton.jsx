import React, { useState } from "react";

import { FaArrowUp } from "react-icons/fa";

import styled from "styled-components";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="ttt1"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaArrowUp />
      Top
    </Button>
  );
};

export default ScrollButton;
const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;
const Button = styled.div`
  position: fixed;
  width: 47px;
  bottom: 40px;
  height: 75px;
  font-size: 2rem;
  z-index: 1;
  right: 2rem;
  cursor: pointer;
  color: #27374d;
  float: right;
  display: flex;
  flex-direction: row-reverse;
`;
