import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={singOutHandler}>
              {' '}
              sing out{' '}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sing in
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nevigation;
