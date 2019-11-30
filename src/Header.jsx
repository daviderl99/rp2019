import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "./icons";
import PropTypes from "prop-types";
import authConsumer from "./components/authConsumer.jsx";
import "./css/header.css";

const Header = ({user}) => {
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
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object
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

export default authConsumer(Header);
