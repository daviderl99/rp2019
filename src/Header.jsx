import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon} from "./icons";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header-logo" src="/images/tlu-logo.png"/>
            </Link>
            <div className="header-buttons">
                <Link className="header-button" to="/login">
                    <img src={userIcon} />
                    <div className="header-button-text">Login/Sign up</div>
                </Link>
                <div className="header-button">
                    <img src={cartIcon} />
                    <div className="header-button-text">Cart</div>
                </div>
            </div>
        </div>
    );
};

export default Header;