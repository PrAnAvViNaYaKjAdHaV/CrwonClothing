import { useContext } from "react";
import { DropdownContext } from "../../Context/dropdown.contex";

import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
const CartDropdown = () => {
  const { dropdownlist } = useContext(DropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {dropdownlist.map((list) => (
          <p>{list}</p>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
