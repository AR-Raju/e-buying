import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  let total = cart.reduce((total, prd) => total + prd.price, 0);
  let shipping = 0;
  if (total > 100) {
    shipping = 5;
  } else if (total > 0) {
    shipping = 12;
  }

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items order: {cart.length}</p>
      <p>Shipping charge: {shipping}</p>
      <p>Total Price: {total + shipping}</p>
    </div>
  );
};

export default Cart;
