import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart);
  let total = cart.reduce(
    (total, prd) => total + prd.price * prd.quantity || 1,
    0
  );
  let shipping = 0;
  if (total > 100) {
    shipping = 5;
  } else if (total > 0) {
    shipping = 12;
  }

  return (
    <div>
      <h3 className="text-danger">Order Summary</h3>
      <p>Items order: {cart.length}</p>
      <p>Shipping charge: {shipping}</p>
      <p>Total Price: {total + shipping}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
