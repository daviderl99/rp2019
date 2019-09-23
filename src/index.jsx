import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const Header = () => {
    return (
        <div className={"header"}>Header</div>
    )
}

ReactDOM.render(
    <Header/>,
    root
);