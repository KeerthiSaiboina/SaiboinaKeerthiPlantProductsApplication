import React from "react";
import { BsSearch, BsPerson, BsCart } from "react-icons/bs";
import "./index.css";

const Headers = () => {
  return (
    <>
      <div className="header-container">
        <div className="free-shipping-container">
          <p className="free-shipping-header">
            Free Shipping on orders above 999/-
          </p>
          <p className="free-shipping-header">Call us on: +91 98768 05120</p>
        </div>

        <div className="container-2">
          <div className="logo-container">
            <img
              src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
              className="logo-image"
            />
            <h1 className="title">Chaperone</h1>
          </div>
          <ul className="options-container">
            <li className="option">Home</li>
            <li className="option-plants">Plants & Pots</li>
            <li className="option">Tools</li>
            <li className="option">Our Services</li>
            <li className="option">Blog</li>
            <li className="option">Our Story</li>
            <li className="option">FAQs</li>
          </ul>

          <div className="profile-cart-container">
            <div className="profile-container">
              <BsPerson className="search-icon" size={28} color="black" />

              <p className="Profile">My Profile</p>
            </div>
            <div className="cart-container">
              <BsCart className="search-icon" size={28} color="black" />
              <p className="Profile">Cart</p>
            </div>
          </div>
        </div>

        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="search-input"
            placeholder="Search Plant"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__"
            className="search-image"
          />
        </div>
      </div>
    </>
  );
};

export default Headers;
