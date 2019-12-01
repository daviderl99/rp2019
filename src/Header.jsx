import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "./icons";
import PropTypes from "prop-types";
import authConsumer from "./components/authConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "./pages/Cartpage.jsx";
import "./css/header.css";

const Header = ({user, cart}) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header-logo" src="/static/images/tlu-logo.png"/>
      </Link>
      <div className="header-buttons">
        {user.email && <WelcomeIcon user={user}/>}
        {!user.email && <LoginRegisterIcon />}
        <Link to={"/cart"} className="header-button">
          <img src={cartIcon} />
          <div className="header-button-text">Cart</div>
          {cart.length > 0 &&
            <Badge>{cart.length}</Badge>
          }
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
  cart: PropTypes.arrayOf(ItemProps).isRequired
};

const Badge = ({children}) => {
  if (children > 99) {
    children = 99;
    return (
      <span className={"badge"}>
        +{children}
      </span>
    );
  }
  return (
    <span className={"badge"}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.number.isRequired
};

const LoginRegisterIcon = () => (
  <Link className="header-button" to={"/login"}>
    <img src={userIcon} />
    <div className="header-button-text">Login/Sign up</div>
  </Link>
);

const WelcomeIcon = ({user}) => (
  <Link className="header-button" to={`/users/${user._id}`}>
    <img src={userIcon} />
    <div className="header-button-text">{user.email}</div>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart
  };
};

export default connect(mapStateToProps)(authConsumer(Header));
