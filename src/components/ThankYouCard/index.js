import { BsX } from "react-icons/bs";
import "./index.css";

const ThankYouCard = () => {
  return (
    <>
      <div className="thankyou-container">
        <div className="cross">
          <BsX size={25} color="black" />
        </div>
        <p className="your-cart">Your Cart</p>
        <hr className="line" />
        <div className="order-container">
          <h1 className="order-heading">Congratulations Order Placed!</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__"
            className="pot-image"
          />
          <p className="thankyou-msg">
            Thank you for choosing Chaperone services. We will soon get in touch
            with you!
          </p>
          <button className="continue-button">continue shopping</button>
        </div>
      </div>
    </>
  );
};

export default ThankYouCard;
