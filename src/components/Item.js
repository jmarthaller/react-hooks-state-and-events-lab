
import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  function handleIsInCartClick() {
    setIsInCart((inCart) => !inCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleIsInCartClick} className={isInCart ? "remove" : "add"}>{isInCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
