import React from "react";

const Home = (props) => {
  console.warn("props", props)
  return (
    <div>
      <h1 className="header">Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://clipartart.com/images/clipart-image-gallery-app-1.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button 
            onClick={() => 
              props.addToCartHandler({price:1000, name:'iphone 12'}) }
            >Add To Cart
          </button>
          <button 
            className="remove-cart-btn"
            onClick={() => 
              props.removeToCartHandler() }
            >Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
