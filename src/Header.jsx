import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header-logo" src="images/tlu-logo.png" alt="TLÜ LOGO"/>
            </Link>
            <div className="header-buttons">
                <button>Login/Sign up</button>
                <button>Cart</button>
            </div>
        </div>
    )
};

export default Header;