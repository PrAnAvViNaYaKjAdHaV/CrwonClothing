import { useContext } from "react";
import {useNavigate } from 'react-router-dom';
import { CartContext } from "../../Context/cart-context";
import Button from "../button/button.component";
import {CartDropdownContainer,EmptyMessage,CartItem} from "./cart-dropdown.style.jsx";
import CartItems from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const{isCartOpen,setIsCartOpen,cartItems} = useContext(CartContext)
  const nevigate = useNavigate();
  const checkOurdirectory = ()=>{
    nevigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartDropdownContainer>
      <CartItem>
       {cartItems.length ?(cartItems.map((item)=>(
          <CartItems key={item.id} cartItems={item}/>
        ))):<EmptyMessage>Your cart is empty</EmptyMessage>}
        {}
      </CartItem>
       <Button onClick={checkOurdirectory}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
