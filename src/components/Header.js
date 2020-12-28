import React from "react";

const Header = (props) => {
  console.warn("Header", props.data)
  return (
    <div>
        <div className="add-to-cart">
          <span className="cart-count">{props.data.length}</span>
          <img src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-shopping-cart-icon-shopping-cart-icon-by-vexels.png" />
      </div>
    </div>
  );
};

export default Header;
