import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage.jsx";
import Itempage from "./Itempage.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/items/:itemId" exact component={Itempage} />
    </BrowserRouter>,
    root
);