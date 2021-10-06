import React, { useEffect } from "react";
import { useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImg from "../../images/giphy.gif";
import { useHistory } from "react-router";

const Review = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const handleProceedCheckout = () => {
    history.push("/shipment");
  };

  const removeItem = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  // const placeOrder = () => {
  //   console.log("clicked placed");
  //   setCart([]);
  //   setOrderPlaced(true);
  //   processOrder();
  // };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);

    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKey),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImg} alt="happyImg" />;
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            removeItem={removeItem}
            product={pd}
            key={pd.key}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button className="btn" onClick={handleProceedCheckout}>
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
