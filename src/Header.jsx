import React from "react";

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src="images/tlu-logo.png" alt="TLÜ LOGO"/>
            <div className="header-buttons">
                <button>Login/Sign up</button>
                <button>Cart</button>
            </div>
        </div>
    )
};

export default Header;