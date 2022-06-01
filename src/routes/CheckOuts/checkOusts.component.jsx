import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout.component";
import "./checkOusts.style.scss";
const CheckOut = () => {
  const {cartItems,Total} =  useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            cartItem={item}
          />
        );
      })}
      <span className="total">Total:{Total}</span>
    </div>
  );
};

export default CheckOut;
