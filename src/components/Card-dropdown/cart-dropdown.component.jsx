import { useContext } from "react";
import {useNavigate } from 'react-router-dom';
import { CartContext } from "../../Context/cart-context";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const{isCartOpen,setIsCartOpen,cartItems} = useContext(CartContext)
  const nevigate = useNavigate();
  const checkOurdirectory = ()=>{
    nevigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartItems.map((item)=>(
          <CartItem key={item.id} cartItems={item}/>
        ))}
      </div>
       <Button onClick={checkOurdirectory}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
