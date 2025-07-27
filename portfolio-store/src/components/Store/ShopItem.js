import React from 'react';

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="shop-item">
      <div className="shop-item-image"><img src={img} alt={name} className="shop-item-img" /></div>
      <div className="shop-item-name">{name.toUpperCase()}</div>
      <div className="shop-item-color">{color}</div>
      <div className="shop-item-price">${price}</div>
      <div className="shop-item-button-container"><button className="shop-item-button">ADD TO CART</button></div>
    </div>
  );
};

export default ShopItem;