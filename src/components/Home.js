import React from "react";

const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-shopping-cart-icon-shopping-cart-icon-by-vexels.png" />
        </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://img.pngio.com/iphone-8-comprehensive-screen-iphone-x-eight-png-image-and-clipart-iphonepng-png-509_768.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
