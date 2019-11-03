import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Itempage from "./pages/Itempage.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Route path={"/"} component={Header} />
        <Route path="/" exact component={Homepage} />
        <Route path="/items/:itemId" exact component={Itempage} />
    </BrowserRouter>,
    root
);