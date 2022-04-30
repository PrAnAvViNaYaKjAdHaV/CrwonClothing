import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import './navigation.style.scss'
const Nevigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sing-in">
            Sing in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nevigation;
