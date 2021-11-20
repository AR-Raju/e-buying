import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  console.log(quantity);
  return (
    <div style={{ borderBottom: "1px solid lightgray", padding: "10px" }}>
      <h4 className="text-primary">{name}</h4>
      <h5>Quantity: {quantity}</h5>
      <button className="btn" onClick={() => props.removeItem(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
