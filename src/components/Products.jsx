import React from "react";
import { useState } from "react";
import "../";
import ItemCard from "./Itemcard";

import ScrollButton from "./ScrollButton";
import styled from "styled-components";

import ALL from "../data/ALL";
import CK from "../data/CK";
import MEAT from "../data/MEAT";
import EGG from "../data/EGG";

const Products = ({ props }) => {
  const [data] = useState("");
  // const { addItem } = useCart();
  const [toggle, setToggle] = useState(1);
  function toggleState(index) {
    setToggle(index);
  }
  return (
    <div className="container1">
      <ScrollButton />
      <div className="tabs">
        <Buttonss>
          <button
            className={toggle === 1 ? "active-tab" : "tab"}
            onClick={() => toggleState(1)}
          >
            All
          </button>
          <button
            className={toggle === 2 ? "active-tab" : "tab"}
            onClick={() => toggleState(2)}
          >
            Chicken
          </button>
          <button
            className={toggle === 3 ? "active-tab" : "tab"}
            onClick={() => toggleState(3)}
          >
            Meat
          </button>
          <button
            className={toggle === 4 ? "active-tab" : "tab"}
            onClick={() => toggleState(4)}
          >
            Egg
          </button>
        </Buttonss>
      </div>
      <div className="contents">
        {/* //button1 */}
        <div className={toggle === 1 ? "active-content" : "content"}>
          {data.length >= 1 ? <ALL data={data} /> : null}

          <section className="py-4 container">
            <div className="row justify-content-center">
              {ALL.map((item, index) => {
                return (
                  <ItemCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    key={index}
                    item={item}
                  />
                );
              })}
            </div>
          </section>
        </div>
        {/* //button2 */}
        <div className={toggle === 2 ? "active-content" : "content"}>
          {data.length >= 1 ? <CK data={data} /> : null}
          <section className="py-4 container">
            <div className="row justify-content-center">
              {CK.map((item, index) => {
                return (
                  <ItemCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    key={index}
                    item={item}
                  />
                );
              })}
            </div>
          </section>
        </div>
        {/* //button3 */}
        <div className={toggle === 3 ? "active-content" : "content"}>
          {data.length >= 1 ? <MEAT data={data} /> : null}
          <section className="py-4 container">
            <div className="row justify-content-center">
              {MEAT.map((item, index) => {
                return (
                  <ItemCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    key={index}
                    item={item}
                  />
                );
              })}
            </div>
          </section>
        </div>
        {/* //button4 */}
        <div className={toggle === 4 ? "active-content" : "content"}>
          {data.length >= 1 ? <EGG data={data} /> : null}
          <section className="py-4 container">
            <div className="row justify-content-center">
              {EGG.map((item, index) => {
                return (
                  <ItemCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    key={index}
                    item={item}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
const Buttonss = styled.button`
  display: flex;
  gap: 32px;
  width: 283px;
  align-items: center;
  background: none;
  border: none;
  margin-top: 13rem;
`;
