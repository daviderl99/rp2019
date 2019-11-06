import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Itempage from "./pages/Itempage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import Registerpage from "./pages/Registerpage.jsx";
import Userpage from "./pages/Userpage.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Route path={"/"} component={Header} />
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Loginpage} />
        <Route path="/register" exact component={Registerpage} />
        <Route path="/users/:userId" exact component={Userpage} />
        <Route path="/items/:itemId" exact component={Itempage} />
    </BrowserRouter>,
    root
);