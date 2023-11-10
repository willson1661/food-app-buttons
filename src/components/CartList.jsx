import React from "react";
import { useCart } from "react-use-cart";

import "../styles.css";

const CartList = ({ props }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  if (isEmpty) {
    return (
      <h1 className="text-center " id="y11">
        Add items to cart :)
      </h1>
    );
  }
  return (
    <div>
      <section className="py-4 container" id="z11">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart {totalUniqueItems} total Items: ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "6rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>Rs.{item.price}</td>

                      <td>
                        <button
                          id="btn_11"
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </td>
                      <td style={{ padding: "13px" }}>({item.quantity})</td>
                      <td>
                        <button
                          id="btn_12"
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          id="btn_13"
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          DEL
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: Rs. {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="btn btn-primary m-2">Pay Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartList;
