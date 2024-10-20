import "./index.css";

const AddtoCartModal = (props) => {
  const { productDetails } = props;
  const { id, productImage, productName, price } = productDetails;

  return (
    <div className="product-list-container">
      <img src={productImage} className="product-image" />
      <h1 className="plant-name">{productName}</h1>
      <p className="offer-price">{price}</p>
      <button className="buy-on-rent-btn">Confirm to Add</button>
    </div>
  );
};

export default AddtoCartModal;
