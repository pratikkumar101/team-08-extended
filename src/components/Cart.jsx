import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from './Footer.jsx'
import '../css/Cart.css'
import Marquee from "./Marquee.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <>
    <Marquee/>
    <div className="cartcontainer">
      <div className="cart">
        {
          total <= 0 && <><h2>Cart is empty!!</h2>
            <Link to='/shop' style={{ color: "black" }}>Back To Shop</Link></>
        }
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.id}>
              <div className="cartcad-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cartcad-info">
                <div className="cartcad-heading">
                  <h4>{item.name}</h4></div>
                <div className="cartcad-price">
                  <p> Price: Rs. {item.price}</p>
                </div>
                <div className="cartcad-amount">
                  <p>Total Amount : Rs. {item.price * item.quantity}</p>
                </div>
                <div className="cartcad-btn1">
                  <button
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    remove
                  </button>
                

              </div>
              <div className="cartcad-btn2">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
      {total > 0 && <h2>total:{total}</h2>}
      </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default Cart;