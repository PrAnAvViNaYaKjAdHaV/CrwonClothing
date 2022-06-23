import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";

import {CheckOutContainer,ImageContainer,Remove} from "./checkout.style.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { removeFromCart, addItemToCart, removeToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeToCart(cartItem);
  const clearHandler = () => removeFromCart(cartItem);
  return (
    <CheckOutContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <Remove onClick={clearHandler}>
        &#10005;
      </Remove>
    </CheckOutContainer>
  );
};

export default CheckoutItem;
