import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon} from "./icons";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({user, token}) => {
  console.log("header", token);
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header-logo" src="/images/tlu-logo.png"/>
      </Link>
      <div className="header-buttons">

        {user.email && <WelcomeIcon user={user}/>}
        {!user.email && <LoginRegisterIcon />}

        <div className="header-button">
          <img src={cartIcon} />
          <div className="header-button-text">Cart</div>
        </div>
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
    <div className="header-button-text">Welcome, {user.email}</div>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.object.isRequired
};

export default Header;