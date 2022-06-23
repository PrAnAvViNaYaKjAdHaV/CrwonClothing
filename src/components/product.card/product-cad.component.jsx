import { useContext } from "react";

import {ProductCotainer,Footer} from "./product-card.style.jsx";
import { CartContext } from "../../Context/cart-context";
import Button from "../button/button.component";

  const ProdcutCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCotainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </ProductCotainer>
  );
};

export default ProdcutCard;
