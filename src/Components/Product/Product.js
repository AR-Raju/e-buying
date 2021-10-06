import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { name, img, price, star, seller, stock, key } = props.product;
  return (
    <div className="productContainer">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="details-container">
        <h4>
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <br />
        <p>${price}</p>
        <br />
        <p>
          <small>only {stock} left - order soon</small>
        </p>
        <br />
        {props.showAddToCart && (
          <button
            className="btn"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
