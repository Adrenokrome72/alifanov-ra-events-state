import React from 'react';

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="shop-card">
      <img src={img} alt={name} className="shop-card-img" />
      <h3 className="shop-card-name">{name.toUpperCase()}</h3>
      <p className="shop-card-color">{color}</p>
      <p className="shop-card-price">${price}</p>
      <button className="shop-card-button">ADD TO CART</button>
    </div>
  );
};

export default ShopCard;