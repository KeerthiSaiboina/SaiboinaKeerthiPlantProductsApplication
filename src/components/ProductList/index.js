import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";

import "./index.css";

const ProductList = (props) => {
  const { productDetails } = props;
  const { id, productImage, productName, price } = productDetails;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/thank-you");
  };
  const handleButtonClickCart = () => {
    navigate("/add-to-cart");
  };
  return (
    <li className="product-list-container">
      <div className="image-container">
        <img src={productImage} className="product-image" />

        <button className="view-btn" onClick={handleButtonClick}>
          View Product
        </button>
      </div>
      <h1 className="plant-name">{productName}</h1>
      <p className="plant-highlight">Indoor Plant, Low maintenance</p>
      <p className="actual-price">₹ 359</p>
      <span className="offer-price">{price}</span>
      <br />
      <button
        className="add-to-cart-btn"
        type="button"
        onClick={handleButtonClickCart}
      >
        <BsDashSquare size={12} className="minus" />
        <p className="btn-name">Add to cart</p>
        <BsPlusSquare size={12} className="plus" />
      </button>
      <button className="buy-on-rent-btn" type="button">
        Buy on rent
      </button>
    </li>
  );
};

export default ProductList;
