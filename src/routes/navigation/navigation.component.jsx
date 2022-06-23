import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from"./navigation.style.jsx";
import { CartContext } from "../../Context/cart-context";
import { userContext} from "../../Context/user.contex";
import { singOutUser } from "../../util/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/Card-dropdown/cart-dropdown.component";
const Nevigation = () => {
const { currentUser,setCurrentUser } = useContext(userContext);
  const singOutHandler = async ()=>{
    await singOutUser();
    setCurrentUser(null);
  }
  const {isCartOpen} = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwnlogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink  to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={singOutHandler}>
              {' '}
              sing out{' '}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sing in
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Nevigation;
